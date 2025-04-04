import { toast } from 'react-toastify';

import { Cat } from '@/payload-types';
import { fireEvent, render, screen, waitFor } from '@/tests/test-utils';

import { SponsorForm } from './SponsorForm';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

const mockCat: Cat = {
  id: '1',
  nome: 'Gato Teste',
  sexo: 'M',
  createdAt: '',
  updatedAt: '',
  idade: '1 ano',
  descricao: 'Gato fofo',
  foto: undefined,
  galeria: [],
  vacinas: [],
  vermifugacoes: [],
  castrado: true,
  dataEntrada: '',
  adotado: false,
  show: true,
  disponivelParaApadrinhamento: true
};

const onSuccessMock = jest.fn();

describe('<SponsorForm />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all required fields', () => {
    const { container } = render(<SponsorForm cat={mockCat} onSuccess={onSuccessMock} />);

    expect(screen.getByTestId('input-nome')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-whatsapp')).toBeInTheDocument();
    expect(screen.getByTestId('select-plano')).toBeInTheDocument();
    expect(screen.getByTestId('select-pagamento')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-termos')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('shows validation errors when required fields are empty', async () => {
    render(<SponsorForm cat={mockCat} onSuccess={onSuccessMock} />);
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByText('Informe seu nome')).toBeInTheDocument();
      expect(screen.getByText('Informe seu número de WhatsApp')).toBeInTheDocument();
      expect(screen.getByText('Informe seu email')).toBeInTheDocument();
      expect(screen.getByText('Selecione um plano de contribuição')).toBeInTheDocument();
      expect(screen.getByText('Selecione a forma de pagamento')).toBeInTheDocument();
      expect(screen.getByText('É necessário aceitar os termos')).toBeInTheDocument();
    });
  });

  it('submits the form successfully with correct data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'success' })
      })
    ) as jest.Mock;

    render(<SponsorForm cat={mockCat} onSuccess={onSuccessMock} />);

    fireEvent.change(screen.getByTestId('input-nome'), {
      target: { value: 'João Vítor' }
    });
    fireEvent.change(screen.getByTestId('input-email'), {
      target: { value: 'joao@example.com' }
    });
    fireEvent.change(screen.getByTestId('input-whatsapp'), {
      target: { value: '11999999999' }
    });
    fireEvent.change(screen.getByTestId('select-plano'), {
      target: { value: 'R$ 29,90 (Básico)' }
    });
    fireEvent.change(screen.getByTestId('select-pagamento'), {
      target: { value: 'Pix' }
    });
    fireEvent.click(screen.getByTestId('checkbox-termos'));

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(onSuccessMock).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith('Apadrinhamento enviado com sucesso! 🐾');
    });
  });

  it('shows error toast if API fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false
      })
    ) as jest.Mock;

    render(<SponsorForm cat={mockCat} onSuccess={onSuccessMock} />);

    fireEvent.change(screen.getByTestId('input-nome'), {
      target: { value: 'João Vítor' }
    });
    fireEvent.change(screen.getByTestId('input-email'), {
      target: { value: 'joao@example.com' }
    });
    fireEvent.change(screen.getByTestId('input-whatsapp'), {
      target: { value: '11999999999' }
    });
    fireEvent.change(screen.getByTestId('select-plano'), {
      target: { value: 'R$ 29,90 (Básico)' }
    });
    fireEvent.change(screen.getByTestId('select-pagamento'), {
      target: { value: 'Pix' }
    });
    fireEvent.click(screen.getByTestId('checkbox-termos'));

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(onSuccessMock).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith('Erro ao enviar. Tente novamente. 😿');
    });
  });
});
