import { redirect } from 'next/navigation';

/** Compatibilidade com links antigos: catálogo e paginação agora ficam na home. */
type Props = { searchParams: Promise<{ page?: string }> };
export default async function LegacyCatalogPage({ searchParams }: Props) {
  const requested = Number((await searchParams).page || 1);
  const page = Number.isSafeInteger(requested) && requested > 1 ? requested : 1;
  const search = new URLSearchParams();
  search.set('filtro', 'adocao');
  if (page > 1) search.set('page', String(page));
  redirect(`/?${search.toString()}#gatinhos`);
}
