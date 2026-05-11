'use client';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TikTokIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TikTokIcon
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
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#013274] text-white">
      <div data-testid="footer-container" className="container mx-auto px-4 py-12 w-full max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4 ">
              <div className="inline-block  p-2">
                <div className="relative h-20 w-[82px]">
                  <Image
                    src="/logo-rodape.webp"
                    alt="Gatil dos Resgatados"
                    fill
                    className="object-contain bg-white border-1 rounded-full"
                    sizes="200px"
                    priority
                  />
                </div>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              Resgatando, cuidando e encontrando lares amorosos para gatinhos que precisam de uma
              segunda chance. Cada vida importa! 💝
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`footer-menu-link-${menuItems.indexOf(item)}`}
                  className={`block hover:text-accent transition-colors ${
                    pathname === item.href ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>
                  <Link
                    href="https://wa.me/5548996118451"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (48) 99611-8451
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Sombrio, SC</span>
              </div>
              <div className="flex gap-4 mt-4">
                {socialLinks.map(({ type, url }, index) => {
                  const Icon = iconMap[type];
                  return (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`footer-social-link-${index}`}
                      href={url}
                      key={index}
                      className="hover:text-accent hover:scale-110 transitions transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/80 mt-8 pt-8 text-center text-white/60">
          <p>© {year} Gatil dos Resgatados. Feito com muito amor para os gatinhos. 🐱❤️✨</p>
        </div>
      </div>
    </footer>
  );
};
