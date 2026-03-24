import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');
const srcDir = join(__dirname, 'src');

if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

// Read our structured tokens
let tokens;
const rawPath = join(srcDir, 'figma-raw.json');
const manualPath = join(srcDir, 'tokens.json');

if (existsSync(rawPath)) {
  tokens = JSON.parse(readFileSync(rawPath, 'utf-8'));
} else {
  // Fallback: create from hardcoded values
  tokens = {};
}

// Read manual overrides
const overridesPath = join(srcDir, 'overrides', 'motion.json');
const motionOverrides = existsSync(overridesPath)
  ? JSON.parse(readFileSync(overridesPath, 'utf-8'))
  : {};

// Merge tokens
const allTokens = { ...tokens, ...motionOverrides };

// Build CSS custom properties
const cssLines = [':root {'];
const tsLines = ['export const tokens = {'];
const tailwindTheme = { colors: {}, spacing: {}, fontSize: {}, fontWeight: {}, borderRadius: {}, boxShadow: {}, transitionDuration: {}, fontFamily: {} };

function tokenToCssVar(path) {
  return '--ds-' + path.replace(/\./g, '-');
}

function processTokens(obj, prefix = '') {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !value.$value && !value.$type) {
      processTokens(value, path);
    } else {
      const val = value.$value !== undefined ? value.$value : value;
      const cssVar = tokenToCssVar(path);
      cssLines.push(`  ${cssVar}: ${val};`);
      tsLines.push(`  '${path}': '${val}',`);

      // Build tailwind theme
      const parts = path.split('.');
      if (parts[0] === 'color') {
        const colorPath = parts.slice(1).join('-');
        tailwindTheme.colors[colorPath] = `var(${cssVar})`;
      } else if (parts[0] === 'spacing') {
        tailwindTheme.spacing[parts.slice(1).join('-')] = `var(${cssVar})`;
      } else if (parts[0] === 'font-size') {
        tailwindTheme.fontSize[parts.slice(1).join('-')] = `var(${cssVar})`;
      } else if (parts[0] === 'radius') {
        tailwindTheme.borderRadius[parts.slice(1).join('-')] = `var(${cssVar})`;
      } else if (parts[0] === 'shadow') {
        tailwindTheme.boxShadow[parts.slice(1).join('-')] = `var(${cssVar})`;
      } else if (parts[0] === 'duration') {
        tailwindTheme.transitionDuration[parts.slice(1).join('-')] = `var(${cssVar})`;
      }
    }
  }
}

processTokens(allTokens);

cssLines.push('}');
tsLines.push('} as const;');
tsLines.push('export type TokenKey = keyof typeof tokens;');

writeFileSync(join(distDir, 'tokens.css'), cssLines.join('\n'), 'utf-8');
writeFileSync(join(distDir, 'tokens.ts'), tsLines.join('\n'), 'utf-8');
writeFileSync(join(distDir, 'tailwind-preset.js'),
  `module.exports = { theme: { extend: ${JSON.stringify(tailwindTheme, null, 2)} } };`,
  'utf-8');

console.log('✅ Tokens built successfully');
console.log(`   CSS: ${cssLines.length - 2} custom properties`);
console.log(`   Tailwind: ${Object.keys(tailwindTheme.colors).length} colors, ${Object.keys(tailwindTheme.spacing).length} spacings`);
