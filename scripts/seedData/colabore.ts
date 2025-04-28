import { Colabore } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createColabore() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');
  const logoBanco = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');
  const qrCode = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');

  const colabore: Partial<Colabore> = {
    logobanco: logoBanco,
    qrcode: qrCode,
    layout: [
      {
        blockType: 'title',
        text: 'Colabore com o Gatil',
        tag: 'h1',
        alignment: 'left',
        showIcon: false,
        id: '67fea08bca5dc58b021e1f4f'
      },
      {
        blockType: 'textBlock',
        content: {
          root: {
            children: [
              {
                children: [],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                type: 'upload',
                version: 3,
                format: '',
                id: '67fea0dc11a65fc6087ec531',
                fields: null,
                relationTo: 'media',
                value: image1
              }
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1
          }
        },
        id: '67fea09aca5dc58b021e1f50'
      },
      {
        blockType: 'textBlock',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Ajude nossos gatinhos com uma doação via Nubank!',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 1,
                textStyle: ''
              },

              {
                children: [
                  {
                    type: 'linebreak',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Sua contribuição é essencial para garantir cuidados médicos, alimentação e muito carinho aos nossos resgatados. Qualquer valor faz a diferença!',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Dados para doação:',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' Banco: Nubank (260)',
                    type: 'text',
                    version: 1
                  },

                  {
                    type: 'linebreak',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Chave PIX',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ': ',
                    type: 'text',
                    version: 1
                  },

                  {
                    type: 'autolink',

                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'gatildosresgatados@outlook.com',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',

                    fields: {
                      linkType: 'custom',
                      url: 'mailto:gatildosresgatados@outlook.com'
                    },
                    format: '',
                    indent: 0,
                    version: 2
                  }
                ],
                direction: 'ltr',
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Com sua doação, estamos um passo mais perto de oferecer um futuro melhor para esses animais. Obrigado por fazer parte dessa causa!',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1
          }
        },
        id: '67fea0eaca5dc58b021e1f51'
      }
    ],
    meta: {
      title: 'Colabore com o Gatil dos Resgatados | Gatil dos Resgatados',
      description:
        'Ajude os gatinhos resgatados com doações. Veja como contribuir por Pix, transferência ou QR Code. Sua ajuda faz toda a diferença!',
      image: image1
    }
  };

  return colabore;
}

export default await createColabore();
