import { CollectionConfig } from 'payload';
// import { CollectionTriggerVercelIfChanged } from '../../hooks/afterChange/collectionTriggerVercelIfChanged';

const Adoptions: CollectionConfig = {
  slug: 'adoptions',
  labels: {
    singular: 'Adoção',
    plural: 'Adoções'
  },
  admin: {
    useAsTitle: 'gato',
    group: 'Conteúdo',
    hideAPIURL: true
  },
  hooks: {
    // afterChange: [CollectionTriggerVercelIfChanged]
  },
  fields: [
    {
      name: 'gato',
      label: 'Gato adotado',
      type: 'relationship',
      relationTo: 'cats',
      required: true
    },
    {
      name: 'tutor',
      label: 'Tutor',
      type: 'relationship',
      relationTo: 'guardians',
      required: true
    },
    {
      name: 'dataAdocao',
      label: 'Data da adoção',
      type: 'date',
      required: true
    },
    {
      name: 'observacoes',
      label: 'Observações',
      type: 'textarea'
    }
  ]
};

export default Adoptions;
