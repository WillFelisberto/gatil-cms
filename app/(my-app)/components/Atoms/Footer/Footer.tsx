import { ArrowRight, Facebook, Heart, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { footerDefaults } from '@/lib/landingContent';

const TikTokIcon = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);
const icons = { facebook: Facebook, instagram: Instagram, tiktok: TikTokIcon };
type SocialLink = { type: 'facebook' | 'instagram' | 'tiktok'; url: string };
type MenuItem = { label: string; href: string };
type FooterProps = {
  socialLinks: SocialLink[];
  menuItems: MenuItem[];
  whatsapp?: string;
  labels?: typeof footerDefaults;
};

export const Footer = ({
  socialLinks,
  menuItems,
  whatsapp,
  labels = footerDefaults
}: FooterProps) => {
  const normalizedPhone = whatsapp?.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '') || '';
  return (
    <footer className="gd-footer" data-testid="footer">
      <div className="gd-container gd-footer-grid" data-testid="footer-container">
        <div className="gd-footer-intro">
          <Link href="/" className="gd-footer-brand">
            <Image src="/logo-gatil-rodape.png" width={86} height={86} alt="Gatil dos Resgatados" />
            <span>
              Gatil dos
              <br />
              <strong>Resgatados</strong>
            </span>
          </Link>
          <p>{labels.about}</p>
          <div className="gd-footer-socials">
            {socialLinks
              .filter((s) => s.url && s.type in icons)
              .map(({ type, url }, i) => {
                const Icon = icons[type];
                return (
                  <a
                    href={url}
                    key={`${type}-${i}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${type}`}
                    data-testid={`footer-social-link-${i}`}
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
          </div>
        </div>
        <div className="gd-footer-links">
          <h3>{labels.exploreTitle}</h3>
          {menuItems.map((item, i) => (
            <Link href={item.href} key={item.href} data-testid={`footer-menu-link-${i}`}>
              {item.label}
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
        <div className="gd-footer-links">
          <h3>{labels.infoTitle}</h3>
          <Link href="/politica-de-adocao">
            {labels.adoptionPolicyLabel}
            <ArrowRight size={15} />
          </Link>
          <Link href="/termos-de-apadrinhamento">
            {labels.sponsorshipTermsLabel}
            <ArrowRight size={15} />
          </Link>
          <Link href="/#contato">
            {labels.contactLabel}
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="gd-footer-contact">
          <h3>{labels.contactTitle}</h3>
          <p>{labels.contactDescription}</p>
          <span>
            <MapPin size={18} /> {labels.location}
          </span>
          {normalizedPhone && (
            <a
              href={`https://wa.me/55${normalizedPhone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={18} /> {whatsapp}
            </a>
          )}
          <Link href="/#contato">
            <Mail size={18} /> {labels.contactLabel}
          </Link>
          <Link className="gd-button gd-button-light" href="/#colabore">
            {labels.contactButton} <Heart size={16} />
          </Link>
        </div>
      </div>
      <div className="gd-container gd-footer-bottom">
        <span>
          © {new Date().getFullYear()} {labels.copyright}
        </span>
        <span>
          {labels.closingPhrase} <Heart size={13} fill="currentColor" />
        </span>
      </div>
    </footer>
  );
};
