import React from 'react';
import { clsx } from 'clsx';

export const Footer1440: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={clsx('bg-neutral-950 text-text-inverse font-sans mt-8', className)}>
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {[
          { title: 'FNAC', links: ['Notre histoire', 'Recrutement', 'Espace presse', 'Investisseurs'] },
          { title: 'Services', links: ['Adhérent FNAC', 'Carte FNAC', 'Service après-vente', 'Garanties'] },
          { title: 'Aide', links: ['FAQ', 'Contact', 'Suivi commande', 'Livraison'] },
          { title: 'Legal', links: ['CGU', 'Confidentialité', 'Cookies', 'Mentions légales'] },
          { title: 'Nos sites', links: ['Fnac.com', 'Fnac Spectacles', 'Fnac Pro', 'Fnac Darty'] },
        ].map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-text-inverse uppercase tracking-wider">{col.title}</h4>
            {col.links.map((link) => (
              <a key={link} href="#" className="text-xs text-neutral-400 hover:text-text-inverse transition-colors duration-200">{link}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-800 mt-8 pt-6 flex items-center justify-between">
        <span className="text-xs text-neutral-500">© 2024 FNAC DARTY Participations et Services. Tous droits réservés.</span>
      </div>
    </div>
  </footer>
);
