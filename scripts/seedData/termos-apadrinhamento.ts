import { Payload } from 'payload';

import { PoliticaApadrinhamento } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createTermosApadrinhamento(payload: Payload) {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1', payload);

  const termosApadrinhamento: Partial<PoliticaApadrinhamento> = {
    layout: [
      {
        blockType: 'title',
        text: 'Nossa Política de Adoção',
        tag: 'h1',
        alignment: 'left',
        showIcon: false,
        id: '67fea311498fa9db5c83b70c'
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
                    text: 'Política de Apadrinhamento do Gatil dos Resgatados',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 1,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 1,
                textStyle: ''
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Nosso compromisso é garantir que cada gato resgatado receba cuidados contínuos enquanto aguarda por uma adoção definitiva. Para isso, desenvolvemos o programa de apadrinhamento, uma forma de nos ajudar financeiramente e, ao mesmo tempo, criar uma conexão especial entre padrinhos e afilhados felinos.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                    text: 'Pedimos que leia com atenção os critérios e explicações abaixo antes de prosseguir com a solicitação de apadrinhamento.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'Critérios para Apadrinhamento',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h3'
              },

              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Idade mínima do padrinho/madrinha: ',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: '18 anos',
                        type: 'text',
                        version: 1
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
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Pagamento: ',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Via Pix ou Cartão de Crédito',
                        type: 'text',
                        version: 1
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
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Cobrança: ',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Realizada via WhatsApp todo dia 10',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' de cada mês.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Frequência de envio de conteúdo: ',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Depende do plano escolhido',
                        type: 'text',
                        version: 1
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
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Brindes: ',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Itens personalizados com a foto do afilhado(a)',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ', conforme plano.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul'
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'Planos disponíveis',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                tag: 'h3'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '🐾 ',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Plano Master – R$99,90/mês',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Fotos, vídeos e notícias 3x por semana',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Caneca personalizada com a foto do afilhado(a)',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Visita ao gatil',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul'
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: '🐾 ',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Plano Premium – R$59,90/mês',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Fotos, vídeos e notícias 3x por semana',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Caneca personalizada com a foto do afilhado(a)',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul'
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: '🐾 ',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Plano Básico – R$29,90/mês',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Fotos, vídeos e notícias 1x por semana',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Chaveiro com a foto do afilhado(a)',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul'
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'Por que o apadrinhamento é importante?',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h3'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'Sustentabilidade do projeto',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h4'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'O apadrinhamento garante recursos fixos para alimentação de qualidade, atendimento veterinário, limpeza, segurança e conforto dos nossos gatos.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                    text: 'Vínculo afetivo',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h4'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Mesmo que você não possa adotar, pode se conectar com um resgatado, acompanhando seu desenvolvimento e recebendo notícias frequentes sobre ele.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                    text: 'Brindes afetivos',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h4'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Cada plano inclui um presente personalizado com a foto do seu afilhado(a), como forma de agradecimento pela sua contribuição.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'Nosso compromisso com a qualidade de vida dos gatos',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h3'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Todos os gatos que permanecem sob os nossos cuidados recebem:',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Consulta veterinária inicial e acompanhamento contínuo',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Vacinação, vermifugação e antipulgas',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Castração (se maiores de 6 meses)',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Alimentação super premium',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Ambiente seguro e socialização',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul'
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'O processo de apadrinhamento',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h3'
              },

              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Escolha do afilhado: Você seleciona o gato disponível com quem deseja criar vínculo.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Escolha do plano: Indique o plano desejado (básico, premium ou master).',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Cadastro: Informaremos os dados para pagamento e incluiremos você na nossa lista de comunicação via WhatsApp.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Envio dos benefícios: A frequência dos conteúdos e brindes será conforme o plano escolhido.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'number',
                start: 1,
                tag: 'ol'
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'Caso não concorde com nossas regras',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h3'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Entendemos que nem todos possam ou queiram contribuir dessa forma. Respeitamos diferentes possibilidades de apoio, mas essas medidas refletem nosso compromisso com o bem-estar e segurança dos gatos.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                    text: 'Apadrinhar conosco implica seguir integralmente nossa política.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
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
                    text: 'Se você compartilha dos nossos valores e deseja fazer parte da nossa rede de carinho e cuidado, clique aqui para começar o processo.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
                    text: 'Agradecemos por transformar a vida de um resgatado com seu apoio!',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 1,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: '',
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
        id: '67fea306498fa9db5c83b70b'
      }
    ],
    meta: {
      title: 'Saiba sobre Termos de Apadrinhamento | Gatil dos resgatados',
      description:
        'Leia os termos de apadrinhamento do nosso gatil. Contribua para o cuidado e bem-estar dos nossos gatos com responsabilidade e amor.',
      image: image1
    }
  };

  return termosApadrinhamento;
}

export default await createTermosApadrinhamento;
