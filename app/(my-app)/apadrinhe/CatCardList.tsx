import type { Cat } from '@/payload-types';
import { CatCard } from '../components/Atoms/CatCard';

type CatListProps = { cats: Cat[]; whatsapp: string };
export const CatCardList = ({ cats, whatsapp }: CatListProps) => <div className="gd-cat-grid">{cats.map(cat => <CatCard key={cat.id} cat={cat} whatsappNumber={whatsapp} mode="apadrinhar"/>)}</div>;
