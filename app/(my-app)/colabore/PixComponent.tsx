'use client';

import { Copy, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { forwardRef } from 'react';
import { toast } from 'react-toastify';

import { CopyButton } from '../components/Atoms/CopyButton';

type PixKeyType = 'cnpj' | 'email' | 'bank' | 'phone' | 'cpf' | 'other';

export interface PixKey {
  tipo?: PixKeyType | null;
  valor?: string | null;
  id?: string | null;
}

export interface PixProps {
  qrcodeUrl?: string;
  bankLogoUrl?: string;
  bank?: {
    name?: string;
    agency?: string;
    account?: string;
    holder?: string;
  };
  className?: string;
  chavesPix?: PixKey[]; // << agora é array
}

// helpers
const KEY_LABEL: Record<PixKeyType, string> = {
  cnpj: 'Chave PIX (CNPJ)',
  email: 'Chave PIX (E-mail)',
  bank: 'Chave PIX (Banco)',
  phone: 'Chave PIX (Telefone)',
  cpf: 'Chave PIX (CPF)',
  other: 'Chave PIX'
};

const onlyDigits = (v: string) => v.replace(/\D+/g, '');

const formatCNPJ = (v: string) => {
  const d = onlyDigits(v).padEnd(14, '_');
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12, 14)}`
    .replace(/[_.-/]+$/, '')
    .trim();
};

const formatCPF = (v: string) => {
  const d = onlyDigits(v).padEnd(11, '_');
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9, 11)}`
    .replace(/[_.-]+$/, '')
    .trim();
};

const formatPhone = (v: string) => {
  const d = onlyDigits(v);
  if (d.length <= 10) {
    // (AA) NNNN-NNNN
    const p = d.padEnd(10, '_');
    return `(${p.slice(0, 2)}) ${p.slice(2, 6)}-${p.slice(6, 10)}`.replace(/[_()-\s]+$/, '').trim();
  }
  // (AA) NNNNN-NNNN
  const p = d.padEnd(11, '_');
  return `(${p.slice(0, 2)}) ${p.slice(2, 7)}-${p.slice(7, 11)}`.replace(/[_()-\s]+$/, '').trim();
};

const formatByTipo = (tipo: PixKeyType | null | undefined, valor: string) => {
  if (!valor) return '';
  switch (tipo) {
    case 'cnpj':
      return formatCNPJ(valor);
    case 'cpf':
      return formatCPF(valor);
    case 'phone':
      return formatPhone(valor);
    default:
      return valor; // email, bank, other
  }
};

const PixComponent = forwardRef<HTMLDivElement, PixProps>(
  ({ qrcodeUrl, bankLogoUrl, bank, className = '', chavesPix = [] }, ref) => {
    const copyToClipboard = (text: string, label: string) => {
      if (!text) return;
      navigator.clipboard.writeText(text);
      toast.success(`${label} copiada!`);
    };

    const hasAnything =
      !!qrcodeUrl ||
      !!bankLogoUrl ||
      !!bank?.name ||
      !!bank?.agency ||
      !!bank?.account ||
      !!bank?.holder ||
      (Array.isArray(chavesPix) && chavesPix.length > 0);

    if (!hasAnything) return null;

    // só chaves válidas com valor
    const keys = (chavesPix || []).filter((k) => !!k?.valor) as Required<PixKey>[];

    return (
      <div ref={ref} className={`space-y-8 ${className}`}>
        {/* PIX */}
        <div className="card-colabore p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">PIX</h2>
              <p className="text-foreground/70">Forma mais rápida e prática</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* QR Code + Logo do banco opcional */}
            {(qrcodeUrl || bankLogoUrl) && (
              <div className="bg-background/50 p-6 rounded-2xl text-center space-y-4">
                {qrcodeUrl && (
                  <>
                    <p className="text-sm text-muted-foreground font-semibold">
                      Escaneie o QR Code
                    </p>
                    <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
                      <Image
                        width={192}
                        height={192}
                        src={qrcodeUrl}
                        alt="QR Code PIX"
                        className="w-48 h-48 mx-auto"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Aponte a câmera do seu celular ou abra o app do banco
                    </p>
                  </>
                )}
                {bank?.name && (
                  <div className="text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold">Banco:</span> {bank.name}
                    </div>
                    {bank.agency && (
                      <div>
                        <span className="font-semibold">Agência:</span> {bank.agency}
                      </div>
                    )}
                    {bank.account && (
                      <div>
                        <span className="font-semibold">Conta:</span> {bank.account}
                      </div>
                    )}
                    {bank.holder && (
                      <div>
                        <span className="font-semibold">Favorecido:</span> {bank.holder}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Lista dinâmica de chaves PIX */}
            {keys.length > 0 && (
              <div className="space-y-4">
                {keys.map((k) => {
                  const tipo = (k.tipo || 'other') as PixKeyType;
                  const label = KEY_LABEL[tipo] || KEY_LABEL.other;
                  const shown = formatByTipo(tipo, k.valor || '');
                  const id = k.id || `${tipo}-${k.valor}`;
                  // cor de fundo alternada por tipo (opcional leve)
                  const bg =
                    tipo === 'email'
                      ? 'bg-accent/20'
                      : tipo === 'phone'
                        ? 'bg-secondary/30'
                        : tipo === 'cnpj' || tipo === 'cpf'
                          ? 'bg-secondary/20'
                          : 'bg-muted/20';

                  return (
                    <div key={id} className={`${bg} p-6 rounded-2xl`}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-1">{label}</p>
                          <p
                            className="font-mono text-lg font-semibold truncate max-w-[50vw] sm:max-w-full"
                            title={k.valor || ''}
                          >
                            {shown}
                          </p>
                        </div>
                        <CopyButton
                          size="sm"
                          onClick={() => copyToClipboard(k.valor || '', 'Chave PIX')}
                          variant="outline"
                          className="rounded-full ml-4 flex-shrink-0"
                          aria-label={`Copiar ${label}`}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar
                        </CopyButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PixComponent.displayName = 'PixComponent';
export default PixComponent;
