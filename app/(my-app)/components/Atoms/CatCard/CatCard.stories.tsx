import type { Meta, StoryObj } from '@storybook/react';

import { CatCard } from './CatCard';

const meta: Meta<typeof CatCard> = {
  title: 'Atoms/CatCard',
  component: CatCard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CatCard>;

export const Default: Story = {
  args: {
    cat: {
      id: 'gato-1',
      nome: 'Luna',
      idade: '3 meses',
      descricao: 'Muito carinhosa, adora brincar com bolinhas de papel.',
      foto: '/gato.jpg',
      sexo: 'F',
      vacinas: [{ nome: 'V4' }],
      vermifugacoes: [{ nome: 'Vermivet' }],
      castrado: true,
      doencas: 'Nenhuma conhecida',
      observacoesSaude: 'Completamente saudável após resgate.'
    }
  }
};

export const SemVacinaOuVermifugo: Story = {
  args: {
    cat: {
      id: 'gato-2',
      nome: 'Biscoito',
      idade: '2 anos',
      sexo: 'M',
      descricao: 'Observador e calmo. Adora dormir no sol.',
      foto: '/gato.jpg',
      vacinas: [],
      vermifugacoes: [],
      castrado: true,
      doencas: null,
      observacoesSaude: null
    }
  }
};

export const ComDoencas: Story = {
  args: {
    cat: {
      id: 'gato-3',
      nome: 'Tigrinho',
      sexo: 'M',

      idade: '1 ano e meio',
      descricao: 'Agitado, curioso e precisa de atenção veterinária contínua.',
      foto: '/gato.jpg',
      vacinas: [{ nome: 'V3' }],
      vermifugacoes: [],
      castrado: false,
      doencas: 'Leucemia felina',
      observacoesSaude: 'Toma medicação diariamente.'
    }
  }
};

export const SemFoto: Story = {
  args: {
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
      observacoesSaude: null
    }
  }
};

export const ApenasComNome: Story = {
  args: {
    cat: {
      id: 'gato-5',
      nome: 'Fantasma',
      sexo: 'F'
    }
  }
};
