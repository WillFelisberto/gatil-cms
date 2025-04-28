import { PoliticaAdocao } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createPoliticaAdocao() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');

  const termosApadrinhamento: Partial<PoliticaAdocao> = {
    layout: [
      {
        blockType: 'title',
        text: 'Nossa Política de Adoção',
        tag: 'h1',
        alignment: 'left',
        showIcon: false,
        id: '67fea29f974013794a57700d'
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
                    text: 'Política de Adoção do Gatil dos Resgatados',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 1,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Nosso compromisso é garantir que cada gato encontre um lar seguro, amoroso e adequado às suas necessidades. Por isso, seguimos uma política de adoção criteriosa. Pedimos que leia com atenção os critérios e explicações abaixo antes de prosseguir com a solicitação de adoção.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Critérios para Adoção',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'heading',
                version: 1,
                textFormat: 1,
                tag: 'h3'
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
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Idade mínima do adotante:',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' 21 anos.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Residência:',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Apenas para moradores do Sul de Santa Catarina.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Ambiente seguro:',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3
                  },

                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: 'A residência, seja casa ou apartamento, deve ser ',
                                type: 'text',
                                version: 1
                              },

                              {
                                detail: 0,
                                format: 1,
                                mode: 'normal',
                                style: '',
                                text: 'completamente telada',
                                type: 'text',
                                version: 1
                              },

                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: ' para impedir fugas ou acidentes.',
                                type: 'text',
                                version: 1
                              }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 1,
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
                                text: 'Isso inclui janelas (de todos os tipos), sacadas, varandas, churrasqueiras e pátios. Apartamentos térreos estão sujeitos às mesmas exigências.',
                                type: 'text',
                                version: 1
                              }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 1,
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
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Gatos residentes:',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 4
                  },

                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: 'Caso já possua gatos, é obrigatório apresentar os exames de FIV (AIDS felina) e FeLV (Leucemia felina) de todos os animais da casa.',
                                type: 'text',
                                version: 1
                              }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 1,
                            type: 'listitem',
                            version: 1,
                            value: 1
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
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Condições financeiras:',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 5
                  },

                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: 'É necessário comprovar capacidade de oferecer cuidados básicos como alimentação premium ou super premium, vermífugos, antipulgas, vacinas e consultas veterinárias sempre que necessário.',
                                type: 'text',
                                version: 1
                              }
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 1,
                            type: 'listitem',
                            version: 1,
                            value: 1
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
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 6
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Contrato de adoção:',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 6
                  },

                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: 'O adotante deve assinar o ',
                                type: 'text',
                                version: 1
                              },

                              {
                                detail: 0,
                                format: 1,
                                mode: 'normal',
                                style: '',
                                text: 'Contrato de Adoção de Posse Responsável',
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
                            indent: 1,
                            type: 'listitem',
                            version: 1,
                            value: 1
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
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 7
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
                direction: null,
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
                    text: 'Por que essas exigências são importantes?',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Ambiente seguro e protegido',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Gatos são curiosos e ágeis, o que os torna vulneráveis a acidentes, como quedas de janelas ou fugas. Mesmo em apartamentos térreos ou casas, as telas de proteção evitam que o animal acesse a rua ou telhados, locais cheios de perigos.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Além disso, vivemos em uma época de maior urbanização, com aumento do tráfego, casos de maus-tratos, envenenamentos e doenças graves como FIV, FeLV e PIF, todas incuráveis. No Sul de Santa Catarina, o surto de ',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'esporotricose',
                    type: 'text',
                    version: 1
                  },

                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ', uma zoonose transmissível para humanos, é mais um risco. Gatos que têm acesso à rua vivem, em média, apenas 3 anos, enquanto gatos criados em ambientes seguros podem viver até 15 anos.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Cuidados preventivos',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Mesmo que o animal pareça seguro dentro de casa, situações como barulhos altos, visitas inesperadas ou acidentes podem criar rotas de fuga. Redes de proteção garantem que isso não aconteça.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'start',
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
                    text: 'A saúde do gato adotado e dos animais residentes',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Exigir exames de FIV e FeLV é uma medida essencial para proteger a saúde do gato adotado e dos gatos já presentes no lar. Essas doenças, além de graves, são altamente contagiosas entre felinos.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'start',
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
                format: 'start',
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
                    text: 'Todos os gatos que passam pelo nosso projeto recebem:',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                        text: 'Consulta veterinária inicial, com exames de sangue e outros procedimentos necessários.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
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
                        text: 'Tratamento completo, incluindo vacinação, castração (se maiores de 6 meses), vermifugação e antipulgas.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
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
                        text: 'Alimentação super premium e um ambiente seguro enquanto aguardam adoção.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
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
                        text: 'Atenção especial para socialização, ajudando-os a se tornarem dóceis e adaptáveis.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
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
                listType: 'bullet',
                start: 1,
                tag: 'ul'
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Nosso objetivo é garantir que cada adoção seja um sucesso. Preferimos qualidade em vez de quantidade, pois cada vida importa.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: ''
              },

              {
                children: [],
                direction: 'ltr',
                format: 'start',
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
                    text: 'O processo de adoção',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Avaliação inicial:',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Responderemos em até 48 horas úteis.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1
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
                            text: 'Clique e Adote',
                            type: 'text',
                            version: 1
                          },

                          {
                            detail: 0,
                            format: 1,
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
                        type: 'link',
                        version: 3,
                        textFormat: 9,

                        fields: {
                          linkType: 'custom',
                          newTab: false,
                          url: 'http://gatildosresgatados.com/adote'
                        },
                        id: '67f04262f81fa7b5d1efd1fb'
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 9,
                    value: 2
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Visita domiciliar:',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Iremos agendar uma visita para verificar se o ambiente atende aos critérios de segurança.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Documentação:',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Após a aprovação da visita, enviaremos o ',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Contrato de Adoção',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' para seu e-mail. Ele deverá ser preenchido, assinado e reconhecido em cartório, juntamente com cópias de RG/CNH e comprovante de residência atualizado.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 4
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Entrega do gato:',
                        type: 'text',
                        version: 1
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Assim que tudo estiver finalizado, agendaremos a entrega do animal diretamente em sua residência.',
                        type: 'text',
                        version: 1
                      }
                    ],
                    direction: 'ltr',
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 5
                  }
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'number',
                start: 1,
                tag: 'ol'
              },

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
                format: 'start',
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
                    text: 'Entendemos que nem todos possam ou queiram atender a essas exigências. Respeitamos diferentes opiniões, mas essas medidas refletem nosso compromisso com o bem-estar e segurança dos gatos. Adotar conosco implica seguir integralmente nossa política.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
                    text: 'Se você compartilha dos nossos valores e está pronto para oferecer um lar responsável, ',
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
                        text: 'clique aqui',
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
                      url: 'http://gatildosresgatados.com/adote'
                    },
                    id: '67f04262f81fa7b5d1efd1fc'
                  },

                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: ' para começar o processo.',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 9,
                textStyle: ''
              },

              {
                children: [],
                direction: null,
                format: 'start',
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
                    text: 'Agradecemos por ajudar a transformar a vida de um resgatado!',
                    type: 'text',
                    version: 1
                  }
                ],
                direction: 'ltr',
                format: 'start',
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
        id: '67fea2ad974013794a57700e'
      }
    ],
    meta: {
      title: 'Saiba tudo sobre Políticas de Adoção | Gatil dos Resgatados',
      description:
        'Confira as políticas de adoção dos gatos do nosso gatil. Saiba como adotar com responsabilidade e oferecer um lar amoroso para nossos felinos.',
      image: image1
    }
  };

  return termosApadrinhamento;
}

export default await createPoliticaAdocao();
