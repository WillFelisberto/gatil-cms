'use client';

import { Facebook, Instagram, Music2 } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: Music2
};
type SocialLink = {
  type: 'facebook' | 'instagram' | 'tiktok';
  url: string;
};

type MenuItem = {
  label: string;
  href: string;
};

type FooterProps = {
  socialLinks: SocialLink[];
  menuItems: MenuItem[];
};

export const Footer = ({ socialLinks, menuItems }: FooterProps) => {
  const pathname = usePathname();

  return (
    <footer
      className="flex flex-col border-t border-gray-200 bg-white"
      role="contentinfo"
      data-testid="footer"
    >
      <div className="w-full flex justify-center">
        <div
          className="w-full max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-20"
          data-testid="footer-container"
        >
          {/* Redes sociais e texto */}
          <div className="flex-1 justify-center" data-testid="footer-social">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo-rodape.webp"
                alt="Logo do Gatil dos Resgatados"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-base text-gray-700 max-w-md mx-auto text-center font-poppins">
              Siga-nos nas redes sociais e acompanhe de perto as histórias dos nossos gatinhos
              resgatados, eventos e novidades! Junte-se à nossa comunidade e ajude a espalhar essa
              causa
            </p>
            <div
              className="flex justify-center gap-4 mt-4 text-blue-950 text-xl"
              aria-label="Redes sociais"
            >
              {socialLinks.map(({ type, url }, index) => {
                const Icon = iconMap[type];

                return (
                  <a
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:scale-110 active:text-blue-700 transition-colors duration-200"
                    data-testid={`footer-social-link-${index}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Menu Rápido */}
          <nav
            className="flex-1 justify-center text-center"
            aria-label="Menu Rápido"
            data-testid="footer-menu"
          >
            <h4 className="font-semibold text-base mb-4 text-blue-950">Menu Rápido</h4>
            <ul className="space-y-2 text-sm text-gray-800">
              {menuItems.map(({ label, href }, index) => {
                const isActive = pathname === href;

                return (
                  <li key={index}>
                    <a
                      href={href}
                      data-testid={`footer-menu-link-${index}`}
                      className={`transition-colors duration-200 hover:text-blue-600 hover:font-bold ${
                        isActive ? 'text-primary-blue font-semibold underline' : ''
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-blue-950 text-white text-center py-4 w-full text-sm">
        Feito com 😻 por Gatil dos Resgatados
      </div>
    </footer>
  );
};
