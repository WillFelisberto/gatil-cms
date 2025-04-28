import { Payload } from 'payload';

import { Sobre } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createSobre(payload: Payload) {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1', payload);

  const sobre: Partial<Sobre> = {
    imagem: image1,
    descricao: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Há mais de ',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: '8 anos',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: ', o ',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: 'Gatil dos Resgatados',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: ' dedica-se ao resgate, cuidado e proteção de gatos em situação de risco. O que começou como um gesto de amor se tornou uma missão de vida que já transformou a história de inúmeros felinos em Santa Catarina.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: 'left',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0,
            textStyle: ''
          },

          {
            children: [],
            direction: 'ltr',
            format: 'left',
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
                text: 'Nossa equipe de ',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: 'voluntários apaixonados por gatos',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: ' oferece atendimento veterinário, abrigo, alimentação e muito carinho — preparando os gatinhos para uma nova vida em lares amorosos.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: 'left',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0,
            textStyle: ''
          },

          {
            children: [],
            direction: 'ltr',
            format: 'left',
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
                text: 'Também promovemos programas de ',
                type: 'text',
                version: 1
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'apadrinhamento',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'link',
                version: 3,
                textFormat: 1,

                fields: {
                  linkType: 'custom',
                  newTab: false,
                  url: 'http://localhost:3000/apadrinhamento'
                },
                id: '67eecc05d5a953594c2c91d3'
              },

              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: ' ',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'e ',
                type: 'text',
                version: 1
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'adoção responsável',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'link',
                version: 3,
                textFormat: 1,

                fields: {
                  linkType: 'custom',
                  newTab: false,
                  url: 'http://localhost:3000/adote'
                },
                id: '67eecc05d5a953594c2c91d4'
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '. Através do apadrinhamento, você acompanha a recuperação de um gatinho até ele encontrar seu lar. Com a adoção responsável, garantimos que cada gato vá para um lar preparado para recebê-lo com amor.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: 'left',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 1,
            textStyle: ''
          },

          {
            children: [],
            direction: 'ltr',
            format: 'left',
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
                text: 'Localizado em ',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: 'Sombrio, Santa Catarina',
                type: 'text',
                version: 1
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: ', o projeto continua crescendo com o apoio de pessoas como você — salvando vidas e oferecendo esperança.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: 'left',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0,
            textStyle: ''
          },

          {
            children: [],
            direction: 'ltr',
            format: 'left',
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
                text: 'Junte-se a nós e ajude a escrever novas histórias de superação e amor! 🐾',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: 'left',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0,
            textStyle: ''
          },

          {
            children: [],
            direction: 'ltr',
            format: 'left',
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
                text: 'Para saber mais ou se voluntariar, visite nossa página de ',
                type: 'text',
                version: 1
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 9,
                    mode: 'normal',
                    style: '',
                    text: 'contato',
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
                  linkType: 'custom',
                  newTab: false,
                  url: 'http://localhost:3000/contato'
                },
                id: '67eecc05d5a953594c2c91d5'
              },

              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '.',
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: 'left',
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
    meta: {
      title: 'Sobre o Projeto e Voluntários | Gatil dos resgatados ',
      description:
        'Conheça o projeto Gatil dos Resgatados. Nossa missão é resgatar, cuidar e oferecer um futuro melhor para gatos em situação de abandono. Junte-se a nós',
      image: image1
    }
  };

  return sobre;
}

export default await createSobre;
