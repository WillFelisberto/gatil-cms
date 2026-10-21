import '@/styles/global.css';
import '@/styles/gatil-redesign.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import config from '@payload-config';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getPayload } from 'payload';
import { ToastContainer } from 'react-toastify';

import { Footer } from './components/Atoms/Footer';
import { navigationDefaults, footerDefaults, resolveLabelGroup } from '@/lib/landingContent';
import { Header } from './components/Atoms/Header';

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], display: 'swap', variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Gatil dos Resgatados | Todo amor merece um lar',
  description: 'O Gatil dos Resgatados acolhe e cuida de gatinhos que precisam de uma nova chance. Conheça nossos resgatados, adote, apadrinhe ou colabore.',
  openGraph: { type: 'website', locale: 'pt_BR', title: 'Gatil dos Resgatados', description: 'Adote, apadrinhe e transforme a vida de um gatinho resgatado.', images: [{ url: '/logo-gatil.webp' }] }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config });
  const global = await payload.findGlobal({ slug: 'site-config' });
  const links = global?.links || [];
  const nav = resolveLabelGroup(navigationDefaults, (global as unknown as { navigation?: unknown }).navigation);
  const footer = resolveLabelGroup(footerDefaults, (global as unknown as { footer?: unknown }).footer);
  const menuItems = [
    { label: nav.home, href: '/#inicio' },
    { label: nav.cats, href: '/#gatinhos' },
    { label: nav.about, href: '/#sobre' },
    { label: nav.sponsorship, href: '/#apadrinhamento' },
    { label: nav.donate, href: '/#colabore' },
    { label: nav.contact, href: '/#contato' }
  ];
  return <html lang="pt-BR" className={poppins.variable}><body className="gd-site">
    <Header menuItems={menuItems} donateButtonLabel={nav.donateButton}/>
    <main id="conteudo-principal" className="gd-main">{children}</main>
    <Footer menuItems={menuItems} socialLinks={links} whatsapp={global?.whatsapp || ''} labels={footer}/>
    <ToastContainer position="bottom-center" autoClose={5000} theme="light" />
    <GoogleAnalytics gaId="G-CVEQLYNEPP"/>
  </body></html>;
}
