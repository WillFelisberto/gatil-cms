import { CollectionConfig } from 'payload';

const Cats: CollectionConfig = {
  slug: 'cats',
  labels: {
    singular: 'Gato',
    plural: 'Gatos'
  },
  admin: {
    useAsTitle: 'nome',
    group: 'Conteúdo'
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.adotado) {
          data.disponivelParaApadrinhamento = false;
          data.show = false;
        }
        return data;
      }
    ]
  },
  fields: [
    {
      name: 'nome',
      label: 'Nome',
      type: 'text',
      required: true
    },
    {
      name: 'idade',
      label: 'Idade',
      type: 'text',
      admin: {
        placeholder: 'Ex: 2 meses, 1 ano e meio, 45 dias...'
      }
    },
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'textarea'
    },
    {
      name: 'sexo',
      label: 'Sexo',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Macho',
          value: 'M'
        },
        {
          label: 'Fêmea',
          value: 'F'
        }
      ]
    },
    {
      name: 'foto',
      label: 'Foto principal',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'galeria',
      label: 'Galeria de Fotos',
      type: 'array',
      fields: [
        {
          name: 'imagem',
          label: 'Imagem',
          type: 'upload',
          relationTo: 'media'
        },
        {
          name: 'legenda',
          label: 'Legenda',
          type: 'text'
        }
      ]
    },

    // 🧪 VACINAS
    {
      name: 'vacinas',
      label: 'Vacinas aplicadas',
      type: 'array',
      fields: [
        {
          name: 'nome',
          label: 'Nome da vacina',
          type: 'text',
          required: true
        },
        {
          name: 'data',
          label: 'Data da aplicação',
          type: 'date'
        },
        {
          name: 'observacoes',
          label: 'Observações',
          type: 'textarea'
        }
      ]
    },

    // 💊 VERMÍFUGO
    {
      name: 'vermifugacoes',
      label: 'Vermífugos aplicados',
      type: 'array',
      fields: [
        {
          name: 'nome',
          label: 'Nome do vermífugo',
          type: 'text'
        },
        {
          name: 'data',
          label: 'Data da aplicação',
          type: 'date'
        },
        {
          name: 'observacoes',
          label: 'Observações',
          type: 'textarea'
        }
      ]
    },

    {
      name: 'castrado',
      label: 'Castrado',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'doencas',
      label: 'Doenças diagnosticadas',
      type: 'text'
    },
    {
      name: 'dataEntrada',
      label: 'Data de Entrada no Abrigo',
      type: 'date'
    },
    {
      name: 'observacoesSaude',
      label: 'Observações sobre saúde e comportamento',
      type: 'textarea'
    },
    {
      name: 'adotado',
      label: 'Adotado',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'show',
      label: 'Exibir na página de adoção',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => !siblingData?.adotado
      }
    },
    {
      name: 'disponivelParaApadrinhamento',
      label: 'Disponível para Apadrinhamento',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => !siblingData?.adotado
      }
    }
  ]
};

export default Cats;
