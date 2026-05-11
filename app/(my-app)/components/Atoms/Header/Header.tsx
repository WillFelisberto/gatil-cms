'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className="bg-[#013274] text-white shadow-[var(--shadow-soft)] sticky top-0 z-50"
      data-testid="header"
    >
      <div className="container mx-auto  w-full max-w-7xl px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform">
            <Image
              src="/logo-gatil.webp"
              alt="Gatil dos Resgatados - Logo"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              data-testid="logo"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`px-3 py-2 rounded-full transition-[var(--transition-smooth)] font-medium ${
                  isActive(item.href) ? 'bg-white text-[#013274]' : 'hover:bg-white/10'
                }`}
              >
                <span className={isActive(item.href) ? 'text-[#013274]' : 'text-white'}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Botão Mobile */}
          <button
            data-testid="menu-button"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in" role="menu" data-testid="mobile-menu">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
                className={`block px-4 py-3 rounded-lg transition-[var(--transition-smooth)] font-medium ${
                  isActive(item.href) ? 'bg-white text-[#013274]' : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
