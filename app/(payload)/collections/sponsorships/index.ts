import { generateNextUpdateDate } from 'app/(payload)/hooks/generateNextUpdateDate';
import type { CollectionConfig } from 'payload';

const Sponsorships: CollectionConfig = {
  slug: 'sponsorships',
  labels: {
    singular: 'Apadrinhamento',
    plural: 'Apadrinhamentos'
  },
  admin: {
    group: 'Conteúdo',
    defaultColumns: [
      'gato',
      'padrinho',
      'valorMensal',
      'dataAtualizacao',
      'proximaAtualizacao',
      'whatsapp'
    ]
  },
  hooks: {
    beforeChange: [generateNextUpdateDate]
  },
  fields: [
    {
      name: 'gato',
      label: 'Gatinho apadrinhado(a)',
      type: 'relationship',
      relationTo: 'cats',
      hasMany: true,
      required: false, // <-- Agora controlado por validate
      validate: (value: any, { siblingData }: any) => {
        if (!siblingData?.apadrinhaProjeto && !value) {
          return "Selecione um gato ou marque como 'Apadrinha o projeto inteiro'.";
        }
        return true;
      },
      admin: {
        condition: (_, siblingData) => siblingData?.apadrinhaProjeto !== true,
        components: {
          Cell: 'app/(payload)/components/fields/GatoCell'
        }
      }
    },
    {
      name: 'apadrinhaProjeto',
      label: 'Apadrinha o projeto inteiro?',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'padrinho',
      label: 'Padrinho',
      type: 'relationship',
      relationTo: 'guardians',
      required: true
    },

    {
      name: 'formaPagamento',
      label: 'Forma de pagamento',
      type: 'select',
      options: ['Pix', 'Cartão', 'Dinheiro']
    },
    {
      name: 'valorMensal',
      label: 'Plano de contribuição',
      type: 'select',
      required: true,
      options: [
        { label: 'R$ 29,90 (Básico)', value: 'R$ 29,90 (Básico)' },
        { label: 'R$ 59,90 (Premium)', value: 'R$ 59,90 (Premium)' },
        { label: 'R$ 99,90 (Master)', value: 'R$ 99,90 (Master)' }
      ]
    },
    {
      name: 'certificadoDigital',
      label: 'Deseja receber certificado digital?',
      type: 'checkbox'
    },
    {
      name: 'visitas',
      label: 'Gostaria de participar de eventos ou visitas?',
      type: 'checkbox'
    },
    {
      name: 'aceitaTermos',
      label: 'Aceita os termos e condições?',
      type: 'checkbox',
      required: true
    },
    {
      name: 'dataAtualizacao',
      label: 'Data da última atualização',
      type: 'date',
      admin: {
        date: {
          displayFormat: 'dd/MM/yyyy'
        }
      }
    },
    {
      name: 'proximaAtualizacao',
      label: 'Próxima atualização',
      type: 'date',
      admin: {
        components: {
          Cell: 'app/(payload)/components/fields/ProximaAtualizacaoCell'
        },
        date: {
          displayFormat: 'dd/MM/yyyy'
        },
        readOnly: true
      }
    },
    {
      name: 'ativo',
      label: 'Apadrinhamento ativo?',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Marque para confirmar o pagamento.'
      }
    },
    {
      name: 'whatsapp',
      label: 'Iniciar conversa',
      type: 'text',
      admin: {
        components: {
          Cell: 'app/(payload)/components/fields/WhatsappCell'
        }
      },
      access: {
        create: () => false,
        update: () => false
      }
    }
  ]
};

export default Sponsorships;
