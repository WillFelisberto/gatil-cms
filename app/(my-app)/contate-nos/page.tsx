import config from '@payload-config';
import { Metadata } from 'next';
import { getPayload } from 'payload';
import { FaWhatsapp } from 'react-icons/fa';

import { Media } from '@/payload-types';

import { RenderBlocks } from '../utils/RenderBlocks';

export const dynamic = 'force-dynamic'; // caso use dados dinâmicos do Payload

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const contatoPage = await payload.findGlobal({ slug: 'contato' });

  return {
    title: contatoPage?.meta?.title || undefined,
    description: contatoPage?.meta?.description || undefined,
    openGraph: {
      title: contatoPage?.meta?.title || undefined,
      description: contatoPage?.meta?.description || undefined,
      images: (contatoPage?.meta?.image as Media)?.url
        ? [{ url: (contatoPage?.meta?.image as Media).url! }]
        : undefined
    }
  };
}

export default async function AboutPage() {
  const payload = await getPayload({ config });

  const [contato, siteConfig] = await Promise.all([
    payload.findGlobal({ slug: 'contato' }),
    payload.findGlobal({ slug: 'site-config' })
  ]);

  const whatsapp = siteConfig?.whatsapp ?? '';
  const whatsappNumber = `55${whatsapp.replace(/\D/g, '')}`;
  const whatsappMessage = encodeURIComponent(
    'Olá! Estou entrando em contato para saber mais sobre o apadrinhamento dos gatos resgatados. Gostaria de entender como posso ajudar e contribuir para essa causa. Você pode me passar mais informações? 🐱'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <article className="px-4 py-8 max-w-4xl mx-auto">
      <RenderBlocks blocks={contato.layout} />

      {whatsapp && (
        <section className="mb-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57] transition focus:ring-2 focus:ring-[#25D366] focus:outline-none hover:scale-105"
            data-testid="whatsapp-button"
            aria-label="Abrir conversa no WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </section>
      )}
    </article>
  );
}
