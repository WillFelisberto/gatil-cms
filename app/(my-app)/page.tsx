import config from '@payload-config';
import { Metadata } from 'next';
import { getPayload } from 'payload';

import { Media } from '@/payload-types';

import { RenderBlocks } from './utils/RenderBlocks';

export const dynamic = 'force-dynamic'; // caso use dados dinâmicos do Payload

export default async function Page() {
  const payload = await getPayload({ config });

  const homepage = await payload.findGlobal({ slug: 'homepage' });

  return <RenderBlocks blocks={homepage.layout} />;
}

// 🔥 SEO dinâmico com o plugin de SEO
export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const homepage = await payload.findGlobal({ slug: 'homepage' });

  return {
    title: homepage?.meta?.title || undefined,
    description: homepage?.meta?.description || undefined,
    openGraph: {
      title: homepage?.meta?.title || undefined,
      description: homepage?.meta?.description || undefined,
      images: (homepage?.meta?.image as Media)?.url
        ? [{ url: (homepage?.meta?.image as Media).url! }]
        : undefined
    }
  };
}
