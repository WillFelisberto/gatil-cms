import config from '@payload-config';
import { Gift, Heart } from 'lucide-react';
import { Metadata } from 'next';
// import Image from 'next/image';
import { getPayload } from 'payload';

import { Colabore, Media } from '@/payload-types';

import { getBankById } from '../utils/Banks';
import { RenderBlocks } from '../utils/RenderBlocks';
import PixComponent from './PixComponent';

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

  const logobanco = colabore?.logobanco as Media;
  const qrcode = colabore?.qrcode as Media;

  const bankTransfer = colabore?.dadosBancarios as Colabore['dadosBancarios'];
  const pix = colabore?.chavesPix as Colabore['chavesPix'];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <RenderBlocks<Colabore> blocks={colabore.layout} />

        <div className="space-y-8">
          {/* PIX */}
          {(logobanco?.url || qrcode?.url) && (
            <PixComponent
              chavesPix={pix || []}
              qrcodeUrl={qrcode?.url as string}
              bankLogoUrl={logobanco?.url as string}
            />
          )}

          {/* Bank Transfer */}
          {bankTransfer &&
            bankTransfer.agencia &&
            bankTransfer.contaCorrente &&
            bankTransfer.banco &&
            bankTransfer.favorecido && (
              <div className="card-colabore p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary">Transferência Bancária</h2>
                    <p className="text-foreground/70">Para doações maiores</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground">Banco</p>
                    <p className="font-semibold text-lg">
                      {bankTransfer.banco} - {getBankById(bankTransfer.banco)?.label}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground">Agência</p>
                      <p className="font-semibold text-lg">{bankTransfer.agencia}</p>
                    </div>
                    <div className="bg-background p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground">Conta Corrente</p>
                      <p className="font-semibold text-lg">{bankTransfer.contaCorrente}</p>
                    </div>
                  </div>
                  <div className="bg-background p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground">Favorecido</p>
                    <p className="font-semibold text-lg">{bankTransfer.favorecido}</p>
                  </div>
                </div>
              </div>
            )}

          {/* Other Ways */}
          <div className="card-colabore p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">Outras Formas de Ajudar</h2>
                <p className="text-foreground/70">Toda ajuda é bem-vinda!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/20 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Doações de Ração</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Aceitamos ração para gatos de qualquer marca. Entre em contato para combinar a
                  entrega.
                </p>
              </div>
              <div className="bg-accent/20 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Materiais</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Caixas de areia, arranhadores, caminhas, brinquedos e produtos de limpeza são
                  sempre necessários.
                </p>
              </div>
              <div className="bg-primary-lighter/20 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Trabalho Voluntário</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Ajude cuidando dos gatinhos, limpeza, ou divulgando nas redes sociais.
                </p>
              </div>
              <div className="bg-primary/10 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Medicamentos</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Vermífugos, antipulgas, vitaminas e outros medicamentos veterinários.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] hover:-translate-y-2">
            <Image
              src="/gato.jpg"
              alt="Gatinho precisando de ajuda"
              width={800} // qualquer valor proporcional
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] hover:-translate-y-2">
            <Image
              src="/gato.jpg"
              alt="Gatinho agradecendo"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div> */}
        {/* Thank You Message */}
        <div className="mt-12 bg-gradient-to-br from-secondary/30 to-accent/30 p-8 rounded-3xl text-center border-4 border-accent/30">
          <div className="text-5xl mb-4">🐱💝✨</div>
          <h3 className="text-2xl font-bold text-primary mb-4">Muito Obrigado por Ajudar!</h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Cada contribuição, não importa o tamanho, faz uma enorme diferença na vida dos nossos
            gatinhos resgatados. Você é parte essencial dessa missão de amor e transformação! Cada
            bigodinho agradece do fundo do coração! 🐾💕
          </p>
        </div>
      </div>
    </div>
  );
}
