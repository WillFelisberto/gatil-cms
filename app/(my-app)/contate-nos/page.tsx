import { redirect } from 'next/navigation';
/** Redireciona URLs públicas antigas para a seção correspondente da landing page. */
export default function LegacyPage() {
  redirect('/#contato');
}
