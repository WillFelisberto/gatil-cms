import { Apadrinhe } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createApadrinhe() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');

  const apadrinhamento: Partial<Apadrinhe> = {
    layout: [
      {
        blockType: 'title',
        text: 'Apadrinhe',
        tag: 'h1',
        alignment: 'left',
        showIcon: true,
        id: '67fe9f43d1fd7fc71b389432'
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
                    text: 'Apadrinhar é um gesto de amor que faz toda a diferença! Ao apadrinhar um dos nossos gatinhos resgatados, você contribui diretamente para os cuidados, alimentação e tratamentos veterinários que eles precisam para se recuperar e viver com saúde. Cada gatinho tem uma história de superação, e com sua ajuda, podemos garantir que tenham o melhor futuro possível. Escolha um afilhado e faça parte dessa transformação, proporcionando carinho e segurança para quem mais precisa.',
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
                direction: null,
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
                    text: 'Preencha o formulário e entraremos em contato com você em algumas horas.',
                    type: 'text',
                    version: 1
                  },

                  {
                    type: 'linebreak',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Se houver alguma dúvida entre em contato conosco na página ',
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
                        text: 'Contato',
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
                      url: 'http://www.gatildosresgatados.com/contate-nos'
                    },
                    id: '67eeefc3b163740fad841fac'
                  }
                ],
                direction: 'ltr',
                format: 'justify',
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
        id: '67fe9f4ed1fd7fc71b389433'
      }
    ],
    meta: {
      title: 'Apadrinhe um gatinho | Gatil dos Resgatados ',
      description:
        'Apadrinhe um gatinho! O Gatil dos Resgatados resgata, cuida e prepara gatos para encontrar um novo lar. Conheça os gatos disponíveis para apadrinhar.',
      image: image1
    }
  };

  return apadrinhamento;
}

export default await createApadrinhe();
