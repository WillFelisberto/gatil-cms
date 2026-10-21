'use client';

import { ArrowUpRight, HandHeart, Heart, ShieldCheck } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';

import type { Cat, Media } from '@/payload-types';

type Props = { cat: Cat; whatsappNumber: string; mode?: 'adotar' | 'apadrinhar'; onClick?: () => void };

/** Um card por gato: ações derivadas das flags existentes no Payload CMS. */
export const CatCard = ({ cat, whatsappNumber }: Props) => {
  const photo = typeof cat.foto === 'object' && cat.foto !== null ? cat.foto as Media : null;
  const imageSrc = photo?.url || '/no-image.jpg';
  const phone = whatsappNumber.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
  const canAdopt = !cat.adotado && !!cat.show;
  const canSponsor = !cat.adotado && !!cat.disponivelParaApadrinhamento;
  const pronoun = cat.sexo === 'F' ? 'a' : 'o';
  const objectPronoun = cat.sexo === 'F' ? 'ela' : 'ele';
  const actionHref = (action: 'adotar' | 'apadrinhar') => phone
    ? `https://wa.me/55${phone}?text=${encodeURIComponent(`Olá! Tenho interesse em ${action} ${pronoun} ${cat.nome}. Poderia me contar mais sobre ${objectPronoun}?`)}`
    : '/#contato';

  let age = cat.idade || '';
  if (cat.birthDate) {
    const birthDate = new Date(cat.birthDate);
    if (!Number.isNaN(birthDate.getTime())) age = formatDistanceToNow(birthDate, { locale: ptBR });
  }

  return <article className="gd-cat-card" data-testid={`cat-card-${cat.id}`}>
    <div className="gd-cat-photo">
      <Image src={imageSrc} alt={photo?.alt || `Fotografia de ${cat.nome}`} fill sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" className="gd-cat-image" data-testid="cat-image" />
      <span className="gd-cat-badge" data-testid="contact-badge"><Heart size={13} fill="currentColor" /> {canAdopt ? 'À espera de um lar' : 'Recebendo padrinhos'}</span>
    </div>
    <div className="gd-cat-body">
      <div className="gd-cat-name-row"><h3 data-testid="cat-name">{cat.nome}</h3><span>{cat.sexo === 'F' ? 'Fêmea' : cat.sexo === 'M' ? 'Macho' : 'Gatinho'}</span></div>
      {cat.descricao && <p className="gd-cat-description" data-testid="cat-description">{cat.descricao}</p>}
      <div className="gd-cat-tags" data-testid="cat-details">
        {age && <span>{age}</span>}
        {cat.castrado && <span><ShieldCheck size={13}/> Castrad{pronoun}</span>}
        {!!cat.vacinas?.length && <span>Vacinad{pronoun}</span>}
      </div>
      {(cat.doencas || cat.observacoesSaude) && <p className="gd-cat-health">{cat.doencas || cat.observacoesSaude}</p>}
      <div className="gd-cat-actions">
        {canAdopt && <Link href={actionHref('adotar')} target={phone ? '_blank' : undefined} rel={phone ? 'noopener noreferrer' : undefined} className="gd-cat-adopt" aria-label={`Quero adotar ${cat.nome}`}><Heart size={16}/> Quero adotar <ArrowUpRight size={16}/></Link>}
        {canSponsor && <Link href={actionHref('apadrinhar')} target={phone ? '_blank' : undefined} rel={phone ? 'noopener noreferrer' : undefined} className="gd-cat-sponsor" aria-label={`Apadrinhar ${cat.nome}`}><HandHeart size={16}/> Apadrinhar <ArrowUpRight size={16}/></Link>}
      </div>
    </div>
  </article>;
};
