import { render, screen } from '@/tests/test-utils';
import { CatCard } from './CatCard';
import type { Cat } from '@/payload-types';

const cat = {
  id: 42, nome: 'Luna', sexo: 'F', descricao: 'Muito carinhosa', idade: '2 anos',
  adotado: false, show: true, disponivelParaApadrinhamento: true, castrado: true,
  createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z'
} as Cat;

describe('CatCard — catálogo unificado', () => {
  it('exibe um único card com as duas ações quando ambas estão disponíveis', () => {
    render(<CatCard cat={cat} whatsappNumber="(48) 99999-9999" />);
    expect(screen.getByTestId('cat-card-42')).toBeInTheDocument();
    const adopt = screen.getByRole('link', { name: 'Quero adotar Luna' });
    const sponsor = screen.getByRole('link', { name: 'Apadrinhar Luna' });
    expect(adopt).toHaveAttribute('href', expect.stringContaining('wa.me/5548999999999'));
    expect(decodeURIComponent(sponsor.getAttribute('href') || '')).toContain('apadrinhar a Luna');
  });

  it('não oferece adoção quando o CMS só permite apadrinhamento', () => {
    render(<CatCard cat={{ ...cat, show: false }} whatsappNumber="" />);
    expect(screen.queryByRole('link', { name: 'Quero adotar Luna' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Apadrinhar Luna' })).toHaveAttribute('href', '/#contato');
  });

  it('não oferece apadrinhamento quando a flag está desligada', () => {
    render(<CatCard cat={{ ...cat, disponivelParaApadrinhamento: false }} whatsappNumber="" />);
    expect(screen.getByRole('link', { name: 'Quero adotar Luna' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Apadrinhar Luna' })).not.toBeInTheDocument();
  });
});
