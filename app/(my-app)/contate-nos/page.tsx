import config from '@payload-config';
import { Metadata } from 'next';
import { getPayload } from 'payload';
import { FaWhatsapp } from 'react-icons/fa';

import { FAQAccordion } from '../components/Atoms/FaqAccordion';
import { RichTextComponent } from '../components/Atoms/RichText';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Gatil dos Resgatados',
  description:
    'Tire suas dúvidas sobre o apadrinhamento de gatos, contribuições e como ajudar o Gatil dos Resgatados. Veja as perguntas frequentes respondidas.'
};

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
      <header className="mb-6 pt-2 text-justify">
        <h1 className="text-3xl md:text-4xl font-bold text-[#013274] mb-6">Perguntas frequentes</h1>

        {contato?.descricao && (
          <div className="text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
            <RichTextComponent lexicalData={contato.descricao} />
          </div>
        )}
      </header>

      {contato?.faq && (
        <section className="mb-12 text-center" aria-labelledby="faq-section">
          <h2 id="faq-section" className="sr-only">
            Lista de perguntas e respostas frequentes
          </h2>
          <FAQAccordion faqs={contato.faq} />
        </section>
      )}

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
