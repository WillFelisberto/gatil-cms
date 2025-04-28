import type { CollectionConfig } from 'payload';
// import { CollectionTriggerVercelIfChanged } from '../../hooks/afterChange/collectionTriggerVercelIfChanged';

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    plural: 'Mídias',
    singular: 'Mídia'
  },
  access: {
    read: () => true
  },
  // hooks: {
  //   afterChange: [CollectionTriggerVercelIfChanged]
  // },
  admin: {
    group: 'Conteúdo'
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre'
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre'
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  },
  fields: [
    {
      name: 'alt',
      type: 'text'
    }
  ]
};
