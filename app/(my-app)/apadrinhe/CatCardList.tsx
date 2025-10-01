'use client';

import { useState } from 'react';

import { Cat } from '@/payload-types';

import { CatCard } from '../components/Atoms/CatCard';
import { SponsorModal } from '../components/Molecules/SponsorModal';

type CatListProps = {
  cats: Cat[];
  whatsapp: string;
};

export const CatCardList = ({ cats, whatsapp }: CatListProps) => {
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  return (
    <>
      {selectedCat && <SponsorModal cat={selectedCat} onClose={() => setSelectedCat(null)} />}

      <div className="flex flex-wrap justify-center gap-8">
        {cats.map((cat) => (
          <div key={cat.id} className="flex-grow max-w-sm min-w-[300px] flex justify-center">
            <CatCard
              cat={cat}
              whatsappNumber={whatsapp}
              mode="apadrinhar"
              // onClick={() => setSelectedCat(cat)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
