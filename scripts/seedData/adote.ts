import { Adote } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createAdote() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');

  const adote: Partial<Adote> = {
    layout: [
      {
        blockType: 'title',
        text: 'Encontre Um Amigo Para Sempre',
        tag: 'h1',
        alignment: 'center',
        showIcon: false,
        id: '67fea11ec8e7895201a9cb19'
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
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Adotar um animal é um gesto de amor que transforma vidas — a deles e a sua! Aqui, você encontrará nossos adoráveis resgatados, cada um com uma história única e uma imensa vontade de fazer parte de uma família. Ao abrir as portas do seu lar para um deles, você oferece uma nova chance, um futuro repleto de carinho e segurança.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'center',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'center',
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
                    text: 'Explore as histórias, apaixone-se e faça parte dessa transformação. Seu novo melhor amigo pode estar aqui, esperando por você. ❤️',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'center',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'center',
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
                    text: 'Pronto para adotar? Descubra como é fácil começar essa jornada abaixo!',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'center',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'center',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 9,
                        mode: 'normal',
                        style: '',
                        text: 'Política de adoção',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'link',
                    version: 3,
                    textFormat: 9,

                    fields: {
                      url: '/politica-de-adocao',
                      newTab: true,
                      linkType: 'custom'
                    },
                    id: '67eed2f74095ca1b5ba78afa'
                  }
                ],
                direction: 'ltr',
                format: 'center',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 9,
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
        id: '67fea12ac8e7895201a9cb1a'
      },

      {
        blockType: 'title',
        text: 'Gatinhos disponíveis para adoção',
        tag: 'h2',
        alignment: 'center',
        showIcon: false,
        id: '67fea133c8e7895201a9cb1b'
      }
    ],
    meta: {
      title: 'Encontre Um Amigo Para Sempre | Gatil dos Resgatados',
      description:
        'Adote um gato resgatado e transforme vidas. Conheça nossos gatinhos disponíveis para adoção, suas histórias e saiba como dar um lar cheio de amor.',
      image: image1
    }
  };

  return adote;
}

export default await createAdote();
