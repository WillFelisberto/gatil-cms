/* eslint-disable no-alert */
import type { Meta, StoryObj } from '@storybook/react';

import { Cat } from '@/payload-types';

import { SponsorModal } from './SponsorModal';

const mockCat: Cat = {
  id: 1,
  nome: 'Gato Teste',
  sexo: 'M',
  idade: '1 ano',
  descricao: 'maluca doidinha',
  createdAt: '2025-04-02T21:24:52.909Z',
  updatedAt: '2025-04-03T20:30:41.034Z',
  foto: {
    createdAt: '2025-04-02T20:48:51.116Z',
    updatedAt: '2025-04-02T20:48:51.116Z',
    alt: 'Will',
    filename: 'gato3.png',
    mimeType: 'image/png',
    filesize: 1008532,
    width: 800,
    height: 800,
    focalX: 50,
    focalY: 50,
    sizes: {
      thumbnail: {
        width: 400,
        height: 300,
        mimeType: 'image/png',
        filesize: 324915,
        filename: 'gato3-400x300.png',
        url: '/api/media/file/gato3-400x300.png'
      },
      card: {
        width: 768,
        height: 1024,
        mimeType: 'image/png',
        filesize: 1794522,
        filename: 'gato3-768x1024.png',
        url: '/api/media/file/gato3-768x1024.png'
      },
      tablet: {
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
        url: null
      }
    },
    id: 23121,
    url: '/api/media/file/gato3.png',
    thumbnailURL: '/api/media/file/gato3-400x300.png'
  },
  galeria: [],
  vacinas: [],
  vermifugacoes: [],
  castrado: true,
  dataEntrada: '2025-04-02T12:00:00.000Z',
  adotado: false,
  show: true,
  disponivelParaApadrinhamento: true
};

const meta: Meta<typeof SponsorModal> = {
  title: 'Molecules/SponsorModal',
  component: SponsorModal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SponsorModal>;

export const Default: Story = {
  args: {
    cat: mockCat,
    onClose: () => alert('Fechar modal')
  }
};
