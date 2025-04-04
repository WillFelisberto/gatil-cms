'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

import { Cat, Media } from '@/payload-types';

import { SponsorForm } from '../../Atoms/SponsorForm';

type SponsorModalProps = {
  cat: Cat;
  onClose(): void;
};

export const SponsorModal = ({ cat, onClose }: SponsorModalProps) => {
  // Fecha no ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sponsor-modal-title"
      data-testid="sponsor-modal"
    >
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto p-6">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
          data-testid="close-button"
        >
          <X className="w-5 h-5" />
        </button>

        <h2
          id="sponsor-modal-title"
          className="text-2xl font-bold text-[#013274] mb-4"
          data-testid="modal-title"
        >
          Apadrinhar {cat.nome}
        </h2>

        {/* Imagem do gato */}
        {cat.foto && typeof cat.foto === 'object' && (
          <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden shadow">
            <Image
              src={(cat.foto as Media).url || ''}
              alt={(cat.foto as Media).alt || `Foto de ${cat.nome}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
              data-testid={`cat-image-${cat.nome}`}
            />
          </div>
        )}

        {cat.descricao && (
          <p className="text-sm text-gray-700 mb-6" data-testid="cat-description">
            {cat.descricao}
          </p>
        )}

        <SponsorForm cat={cat} onSuccess={onClose} />
      </div>
    </div>
  );
};
