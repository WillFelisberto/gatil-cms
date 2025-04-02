import '@/styles/global.css';

import { Poppins } from 'next/font/google';

import { Footer } from './components/Atoms/Footer';
import { Header } from './components/Atoms/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const socialLinks: { type: 'facebook' | 'instagram' | 'tiktok'; url: string }[] = [
    { type: 'facebook', url: 'https://facebook.com' },
    { type: 'instagram', url: 'https://instagram.com' },
    { type: 'tiktok', url: 'https://tiktok.com' }
  ];

  const menuItems = [
    { label: 'Início', href: '#' },
    { label: 'Apadrinhe', href: '#' },
    { label: 'Colabore', href: '#' },
    { label: 'Contato', href: '#' },
    { label: 'Sobre o Projeto', href: '#' },
    { label: 'Adote', href: '#' }
  ];
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header menuItems={menuItems} />
        <main className="min-h-screen">{children}</main>
        <Footer menuItems={menuItems} socialLinks={socialLinks} />
      </body>
    </html>
  );
}
