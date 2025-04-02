'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type MenuItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  menuItems: MenuItem[];
};

export const Header = ({ menuItems }: HeaderProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#013274] text-white" role="banner" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-[91px]">
        <a href="/" aria-label="Ir para a página inicial" className="flex items-center space-x-2">
          <img
            src="/logo-gatil.webp"
            alt="Gatil dos Resgatados - Logo"
            className="w-[230px] h-auto"
            loading="eager"
            fetchPriority="high"
            data-testid="logo"
          />
        </a>

        <nav
          className="hidden md:flex w-full justify-around text-sm font-semibold"
          role="navigation"
          aria-label="Menu principal"
        >
          {menuItems.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Ir para ${link.label}`}
                className="relative text-center pt-2 w-full text-base group"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-blue-300' : 'text-white group-hover:text-blue-300'
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 top-0 h-[2px] bg-blue-300 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100' : ''
                  }`}
                  style={{ width: '100%' }}
                ></span>
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          data-testid="menu-button"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pt-0 pb-4 space-y-2 bg-[#002f6c] animate-fade-slide-down"
          role="menu"
          aria-label="Menu mobile"
        >
          {menuItems.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Ir para ${link.label}`}
                className={`block font-medium border-l-4 pl-2 ${
                  isActive
                    ? 'text-blue-300 border-blue-300'
                    : 'text-white border-transparent hover:text-blue-300 hover:border-blue-300'
                }`}
                data-testid={`mobile-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
