import '@/styles/global.css';

import config from '@payload-config';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getPayload } from 'payload';
import { ToastContainer } from 'react-toastify';

import { Footer } from './components/Atoms/Footer';
import { Header } from './components/Atoms/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Gatil dos Resgatados | Adoção de Gatinhos Resgatados com Amor',
  description:
    'Transforme vidas adotando um gatinho! O Gatil dos Resgatados resgata, cuida e prepara felinos para encontrar um novo lar cheio de amor. Conheça os gatinhos disponíveis para adoção e saiba como colaborar.',
  keywords:
    'adoção de gatos, gatos para adoção, gatil dos resgatados, resgate animal, apadrinhar gatos, adotar gatos SC, adotar gato sombrio, adotar gato araranguá, adotar gato torres',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gatildosresgatados.com/',
    title: 'Gatil dos Resgatados | Adoção de Gatinhos Resgatados com Amor',
    description:
      'O Gatil dos Resgatados cuida de felinos abandonados e busca um lar amoroso para cada um. Adote, apadrinhe ou colabore com nosso projeto.',
    siteName: 'Gatil dos Resgatados',
    images: [
      {
        url: 'https://gatildosresgatados.com/og-image.jpg', // substitua por uma imagem real
        width: 1200,
        height: 630,
        alt: 'Gatil dos Resgatados'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gatil dos Resgatados',
    description:
      'Adote um gatinho resgatado e ajude a transformar vidas. Conheça nossos peludos e saiba como apoiar o projeto!',
    site: '@gatildosresgatados', // substitua se tiver Twitter
    images: ['https://gatildosresgatados.com/og-image.jpg']
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config });
  const global = await payload.findGlobal({ slug: 'site-config' });
  const socialLinks = global?.links || [];

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Apadrinhe', href: '/apadrinhe' },
    { label: 'Colabore', href: '/colabore' },
    { label: 'Contato', href: '/contate-nos' },
    { label: 'Sobre o Projeto', href: '/sobre-o-projeto' },
    { label: 'Adote', href: '/adote' }
  ];

  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <Header menuItems={menuItems} />
        <main>{children}</main>
        <Footer menuItems={menuItems} socialLinks={socialLinks} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
