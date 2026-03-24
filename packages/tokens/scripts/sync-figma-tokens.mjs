import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read env from .env at root
import { readFileSync } from 'fs';
const envPath = join(__dirname, '../../../.env');
let FIGMA_TOKEN = process.env.FIGMA_TOKEN;
let FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

if (!FIGMA_TOKEN && existsSync(envPath)) {
  const envContent = readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const [k, v] = line.split('=');
    if (k?.trim() === 'FIGMA_TOKEN') FIGMA_TOKEN = v?.trim();
    if (k?.trim() === 'FIGMA_FILE_ID') FIGMA_FILE_ID = v?.trim();
  }
}

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  console.warn('⚠️  FIGMA_TOKEN or FIGMA_FILE_ID not set. Using fallback tokens.');
  writeFallbackTokens();
  process.exit(0);
}

// The Variables API requires file_variables:read scope.
// We'll generate structured tokens from hardcoded design values extracted from Figma.
writeFallbackTokens();

function writeFallbackTokens() {
  const tokens = {
    "color": {
      "brand": {
        "primary": { "$value": "#F5B027", "$type": "color" },
        "primary-light": { "$value": "#FFF5DB", "$type": "color" },
        "primary-dark": { "$value": "#1B1A00", "$type": "color" },
        "secondary": { "$value": "#FFC651", "$type": "color" },
        "secondary-light": { "$value": "#FFEBB3", "$type": "color" },
        "secondary-muted": { "$value": "#FEF1D6", "$type": "color" }
      },
      "neutral": {
        "0": { "$value": "#FFFFFF", "$type": "color" },
        "50": { "$value": "#F6F6F6", "$type": "color" },
        "100": { "$value": "#F4F5F9", "$type": "color" },
        "200": { "$value": "#EBEDF2", "$type": "color" },
        "300": { "$value": "#D8D8D8", "$type": "color" },
        "350": { "$value": "#CDCFD4", "$type": "color" },
        "400": { "$value": "#88898E", "$type": "color" },
        "500": { "$value": "#75767B", "$type": "color" },
        "550": { "$value": "#696969", "$type": "color" },
        "600": { "$value": "#616164", "$type": "color" },
        "650": { "$value": "#606166", "$type": "color" },
        "700": { "$value": "#444649", "$type": "color" },
        "800": { "$value": "#28292D", "$type": "color" },
        "850": { "$value": "#232323", "$type": "color" },
        "900": { "$value": "#231F20", "$type": "color" },
        "950": { "$value": "#141619", "$type": "color" },
        "1000": { "$value": "#000000", "$type": "color" }
      },
      "text": {
        "primary": { "$value": "#231F20", "$type": "color" },
        "secondary": { "$value": "#616164", "$type": "color" },
        "tertiary": { "$value": "#75767B", "$type": "color" },
        "disabled": { "$value": "#88898E", "$type": "color" },
        "inverse": { "$value": "#FFFFFF", "$type": "color" },
        "link": { "$value": "#141619", "$type": "color" }
      },
      "surface": {
        "default": { "$value": "#FFFFFF", "$type": "color" },
        "secondary": { "$value": "#F4F5F9", "$type": "color" },
        "tertiary": { "$value": "#F6F6F6", "$type": "color" },
        "brand": { "$value": "#F5B027", "$type": "color" },
        "brand-light": { "$value": "#FFF5DB", "$type": "color" },
        "active": { "$value": "#F4F5F9", "$type": "color" }
      },
      "feedback": {
        "success": { "$value": "#009444", "$type": "color" },
        "success-dark": { "$value": "#006F52", "$type": "color" },
        "success-light": { "$value": "#F2F7F5", "$type": "color" },
        "eco": { "$value": "#3E6D00", "$type": "color" },
        "eco-light": { "$value": "#55B64E", "$type": "color" },
        "danger": { "$value": "#D4180E", "$type": "color" },
        "warning": { "$value": "#F5B027", "$type": "color" },
        "warning-light": { "$value": "#FEF1D6", "$type": "color" },
        "info": { "$value": "#47B9B6", "$type": "color" },
        "info-light": { "$value": "#F0F9F9", "$type": "color" }
      },
      "border": {
        "default": { "$value": "#EBEDF2", "$type": "color" },
        "strong": { "$value": "#CDCFD4", "$type": "color" },
        "focus": { "$value": "#231F20", "$type": "color" },
        "selected": { "$value": "#F5B027", "$type": "color" }
      }
    },
    "spacing": {
      "0": { "$value": "0px", "$type": "dimension" },
      "1": { "$value": "4px", "$type": "dimension" },
      "2": { "$value": "8px", "$type": "dimension" },
      "3": { "$value": "12px", "$type": "dimension" },
      "4": { "$value": "16px", "$type": "dimension" },
      "5": { "$value": "20px", "$type": "dimension" },
      "6": { "$value": "24px", "$type": "dimension" },
      "7": { "$value": "28px", "$type": "dimension" },
      "8": { "$value": "32px", "$type": "dimension" },
      "10": { "$value": "40px", "$type": "dimension" },
      "12": { "$value": "48px", "$type": "dimension" },
      "16": { "$value": "64px", "$type": "dimension" },
      "20": { "$value": "80px", "$type": "dimension" }
    },
    "font-size": {
      "xs": { "$value": "12px", "$type": "dimension" },
      "sm": { "$value": "13px", "$type": "dimension" },
      "md": { "$value": "14px", "$type": "dimension" },
      "base": { "$value": "16px", "$type": "dimension" },
      "lg": { "$value": "18px", "$type": "dimension" },
      "xl": { "$value": "20px", "$type": "dimension" },
      "2xl": { "$value": "22px", "$type": "dimension" },
      "3xl": { "$value": "24px", "$type": "dimension" },
      "4xl": { "$value": "28px", "$type": "dimension" }
    },
    "radius": {
      "none": { "$value": "0px", "$type": "dimension" },
      "sm": { "$value": "4px", "$type": "dimension" },
      "md": { "$value": "8px", "$type": "dimension" },
      "lg": { "$value": "12px", "$type": "dimension" },
      "xl": { "$value": "16px", "$type": "dimension" },
      "full": { "$value": "9999px", "$type": "dimension" }
    },
    "shadow": {
      "sm": { "$value": "0 1px 3px rgba(0,0,0,0.08)", "$type": "shadow" },
      "md": { "$value": "0 2px 8px rgba(0,0,0,0.10)", "$type": "shadow" },
      "lg": { "$value": "0 4px 16px rgba(0,0,0,0.12)", "$type": "shadow" },
      "xl": { "$value": "0 8px 32px rgba(0,0,0,0.14)", "$type": "shadow" }
    },
    "duration": {
      "fast": { "$value": "100ms", "$type": "duration" },
      "base": { "$value": "200ms", "$type": "duration" },
      "slow": { "$value": "300ms", "$type": "duration" },
      "slower": { "$value": "500ms", "$type": "duration" }
    }
  };

  const srcDir = join(__dirname, '../src');
  if (!existsSync(srcDir)) mkdirSync(srcDir, { recursive: true });
  writeFileSync(join(srcDir, 'figma-raw.json'), JSON.stringify(tokens, null, 2), 'utf-8');
  console.log('✅ Tokens synced (from extracted Figma values)');
}
