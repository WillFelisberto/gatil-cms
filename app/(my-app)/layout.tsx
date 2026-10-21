import '@/styles/global.css';
import '@/styles/gatil-redesign.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import config from '@payload-config';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getPayload } from 'payload';
import { FaWhatsapp } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

import { footerDefaults, navigationDefaults, resolveLabelGroup } from '@/lib/landingContent';

import { Footer } from './components/Atoms/Footer';
import { Header } from './components/Atoms/Header';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Gatil dos Resgatados | Todo amor merece um lar',
  description:
    'O Gatil dos Resgatados acolhe e cuida de gatinhos que precisam de uma nova chance. Conheça nossos resgatados, adote, apadrinhe ou colabore.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Gatil dos Resgatados',
    description: 'Adote, apadrinhe e transforme a vida de um gatinho resgatado.',
    images: [{ url: '/logo-gatil.webp' }]
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config });
  const global = await payload.findGlobal({ slug: 'site-config' });
  const whatsapp = global?.whatsapp?.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
  const links = global?.links || [];
  const nav = resolveLabelGroup(
    navigationDefaults,
    (global as unknown as { navigation?: unknown }).navigation
  );
  const footer = resolveLabelGroup(
    footerDefaults,
    (global as unknown as { footer?: unknown }).footer
  );
  const menuItems = [
    { label: nav.home, href: '/#inicio' },
    { label: nav.cats, href: '/#gatinhos' },
    { label: nav.about, href: '/#sobre' },
    { label: nav.sponsorship, href: '/#apadrinhamento' },
    { label: nav.donate, href: '/#colabore' },
    { label: nav.contact, href: '/#contato' }
  ];
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="gd-site">
        <div className="bg-[#023274] px-4 py-[10px] text-center text-[11px] font-bold tracking-[0.11em] text-[#f5f9ff] max-[680px]:text-[9px]">
          PEQUENOS RESGATES, GRANDES RECOMEÇOS <span>✦</span> SOMBRIO • SANTA CATARINA
        </div>
        <Header menuItems={menuItems} donateButtonLabel={nav.donateButton} />
        <main id="conteudo-principal" className="gd-main">
          {children}
        </main>
        <Footer
          menuItems={menuItems}
          socialLinks={links}
          whatsapp={global?.whatsapp || ''}
          labels={footer}
        />

        {whatsapp && (
          <a
            href={`https://wa.me/55${whatsapp}?text=${encodeURIComponent(
              'Olá! Gostaria de saber mais sobre o Gatil dos Resgatados.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar pelo WhatsApp"
            title="Fale conosco pelo WhatsApp"
            className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-[#1ebe5d]"
          >
            <FaWhatsapp size={32} aria-hidden="true" />
          </a>
        )}

        <ToastContainer position="bottom-center" autoClose={5000} theme="light" />
        <GoogleAnalytics gaId="G-CVEQLYNEPP" />
      </body>
    </html>
  );
}
