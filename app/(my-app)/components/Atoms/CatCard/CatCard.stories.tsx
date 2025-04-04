import type { Meta, StoryObj } from '@storybook/react';

import { Cat } from '@/payload-types';

import { CatCard } from './CatCard';

const meta: Meta<typeof CatCard> = {
  title: 'Atoms/CatCard',
  component: CatCard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CatCard>;

const whatsappNumber = '(11) 91234-5678';

export const Default: Story = {
  args: {
    whatsappNumber,
    cat: {
      id: 'gato-1',
      nome: 'Luna',
      idade: '3 meses',
      descricao: 'Muito carinhosa, adora brincar com bolinhas de papel.',
      foto: {
        url: '/gato.jpg',
        alt: 'Gata Luna'
      },
      sexo: 'F',
      vacinas: [{ nome: 'V4' }],
      vermifugacoes: [{ nome: 'Vermivet' }],
      castrado: true,
      doencas: 'Nenhuma conhecida',
      observacoesSaude: 'Completamente saudável após resgate.'
    } as Cat
  }
};

export const SemVacinaOuVermifugo: Story = {
  args: {
    whatsappNumber,
    cat: {
      id: 'gato-2',
      nome: 'Biscoito',
      idade: '2 anos',
      sexo: 'M',
      descricao: 'Observador e calmo. Adora dormir no sol.',
      foto: {
        url: '/gato.jpg',
        alt: 'Gato Biscoito'
      },
      vermifugacoes: null,
      castrado: true,
      doencas: null,
      observacoesSaude: null,
      galeria: null,
      vacinas: null,
      dataEntrada: '2025-04-02T12:00:00.000Z',
      adotado: false,
      show: true,
      disponivelParaApadrinhamento: true
    } as Cat
  }
};

export const ComDoencas: Story = {
  args: {
    whatsappNumber,
    cat: {
      id: 'gato-3',
      nome: 'Tigrinho',
      sexo: 'M',
      idade: '1 ano e meio',
      descricao: 'Agitado, curioso e precisa de atenção veterinária contínua.',
      foto: {
        url: '/gato.jpg',
        alt: 'Gato Tigrinho'
      },
      vacinas: null,
      vermifugacoes: null,
      castrado: false,
      doencas: 'Leucemia felina',
      observacoesSaude: 'Toma medicação diariamente.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as Cat
  }
};

export const SemFoto: Story = {
  args: {
    whatsappNumber,
    cat: {
      id: 'gato-4',
      nome: 'Noir',
      idade: '6 meses',
      sexo: 'M',
      descricao: 'Ainda sem foto cadastrada, mas muito fofo!',
      vacinas: [],
      vermifugacoes: [],
      castrado: false,
      doencas: null,
      observacoesSaude: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      foto: null
    } as Cat
  }
};

export const ApenasComNome: Story = {
  args: {
    whatsappNumber,
    cat: {
      id: 'gato-5',
      nome: 'Fantasma',
      sexo: 'F',
      foto: null
    } as Cat
  }
};
