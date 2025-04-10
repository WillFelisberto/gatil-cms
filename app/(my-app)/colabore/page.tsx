import config from '@payload-config';
import { Metadata } from 'next';
import Image from 'next/image';
import { getPayload } from 'payload';

import { Media } from '@/payload-types';

import { RichTextComponent } from '../components/Atoms/RichText';

export const dynamic = 'force-dynamic'; // caso use dados dinâmicos do Payload

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const colaborePage = await payload.findGlobal({ slug: 'colabore' });

  return {
    title: colaborePage?.meta?.title || undefined,
    description: colaborePage?.meta?.description || undefined,
    openGraph: {
      title: colaborePage?.meta?.title || undefined,
      description: colaborePage?.meta?.description || undefined,
      images: (colaborePage?.meta?.image as Media)?.url
        ? [{ url: (colaborePage?.meta?.image as Media).url! }]
        : undefined
    }
  };
}

export default async function AboutPage() {
  const payload = await getPayload({ config });

  const [colabore] = await Promise.all([payload.findGlobal({ slug: 'colabore' })]);

  const imagem = colabore?.imagem as Media;
  const logobanco = colabore?.logobanco as Media;
  const qrcode = colabore?.qrcode as Media;

  return (
    <article className="px-4 py-8 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl md:text-4xl font-bold text-[#013274] mb-6">Colabore com o Gatil</h1>

      {imagem?.url && (
        <figure className="relative w-full h-64 md:h-[400px] mb-8">
          <Image
            src={imagem.url}
            alt={imagem.alt || 'Três gatinhos deitados em uma caminha no Gatil dos Resgatados'}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-xl shadow-lg object-cover"
          />
        </figure>
      )}

      {colabore?.descricao && (
        <section
          className="mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto"
          aria-label="Descrição de como colaborar"
        >
          <RichTextComponent lexicalData={colabore.descricao} />
        </section>
      )}

      {(logobanco?.url || qrcode?.url) && (
        <section
          className="flex flex-col md:flex-row gap-8 items-center justify-center"
          aria-label="Informações bancárias e QR Code para doação"
        >
          {logobanco?.url && (
            <figure className="relative w-64 h-64 rounded-xl overflow-hidden">
              <Image
                src={logobanco.url}
                alt={logobanco.alt || 'Logotipo do banco para doações'}
                fill
                sizes="256px"
                className="object-contain"
              />
              <figcaption className="sr-only">
                Logo do banco parceiro para transferências
              </figcaption>
            </figure>
          )}

          {qrcode?.url && (
            <figure className="relative w-64 h-64 rounded-xl overflow-hidden">
              <Image
                src={qrcode.url}
                alt={qrcode.alt || 'QR Code para fazer doação ao Gatil dos Resgatados'}
                fill
                sizes="256px"
                className="object-contain"
              />
              <figcaption className="sr-only">QR Code para doação via Pix</figcaption>
            </figure>
          )}
        </section>
      )}
    </article>
  );
}
