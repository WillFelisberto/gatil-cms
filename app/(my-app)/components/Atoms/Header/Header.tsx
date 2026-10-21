'use client';

import { ArrowUpRight, Heart, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type MenuItem = { label: string; href: string };
type HeaderProps = { menuItems: MenuItem[]; donateButtonLabel?: string };

export const Header = ({ menuItems, donateButtonLabel = 'Fazer uma doação' }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="gd-header" data-testid="header">
      <div className="gd-header-inner gd-container">
        <Link href="/" className="gd-brand" aria-label="Gatil dos Resgatados — início">
          <Image src="/logo-gatil.webp" alt="Logo Gatil dos Resgatados" width={66} height={66} priority className="gd-brand-icon" data-testid="logo" />
          <span className="gd-brand-name">Gatil dos<br /><strong>Resgatados</strong></span>
        </Link>
        <nav aria-label="Navegação principal" className="gd-nav-desktop">
          {menuItems.filter((item) => item.href !== '/#contato').map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className={pathname === item.href ? 'gd-nav-active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="gd-header-actions">
          <Link href="/#colabore" className="gd-button gd-button-primary gd-header-donate"><Heart size={16} fill="currentColor" /> {donateButtonLabel} <ArrowUpRight size={16}/></Link>
          <button className="gd-menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="gd-mobile-menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} data-testid="menu-button">
            {open ? <X size={25}/> : <Menu size={25}/>}
          </button>
        </div>
      </div>
      {open && <nav id="gd-mobile-menu" aria-label="Navegação móvel" className="gd-mobile-menu" data-testid="mobile-menu">
        {menuItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
          aria-current={pathname === item.href ? 'page' : undefined} data-testid={`mobile-link-${item.label.toLowerCase()}`}>{item.label}<ArrowUpRight size={17}/></Link>)}
      </nav>}
    </header>
  );
};
