import './loader.css';

import { FC } from 'react';

type LoaderProps = {
  text?: string;
};

export const Loader: FC<LoaderProps> = ({ text }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[70vh] gap-6"
      role="status"
      aria-live="polite"
      aria-busy="true"
      data-testid="loader-container"
    >
      <div className="w-full flex justify-center" data-testid="loader-animation">
        <div
          className="cat relative w-full max-w-25 overflow-hidden rounded-2xl "
          aria-hidden="true"
        >
          <div className="cat__body" />
          <div className="cat__body" />
          <div className="cat__tail" />
          <div className="cat__head" />
        </div>
      </div>

      {text && (
        <p className="text-[#013274] font-semibold text-lg text-center" data-testid="loader-text">
          {text}
        </p>
      )}

      {/* texto auxiliar invisível para leitores de tela */}
      {!text && <span className="sr-only">Carregando conteúdo...</span>}

      <noscript>
        <p>Carregando… Ative o JavaScript para melhor experiência.</p>
      </noscript>
    </div>
  );
};
