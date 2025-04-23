import { Contato } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createContato() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');

  const contato: Partial<Contato> = {
    layout: [
      {
        blockType: 'title',
        text: 'Perguntas frequentes',
        tag: 'h1',
        alignment: 'left',
        showIcon: false,
        id: '67fea1e4974013794a577000'
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
                    text: 'Aqui reunimos as dúvidas mais comuns para ajudar você a entender melhor o nosso trabalho e como pode contribuir para o bem-estar dos nossos gatinhos. Se não encontrar a resposta que procura, entre em contato conosco pelas nossas redes sociais. Estamos aqui para ajudar!',
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
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1
          }
        },
        id: '67fea201974013794a577001'
      },
      {
        blockType: 'title',
        text: 'Lista de perguntas e respostas frequentes',
        tag: 'h2',
        alignment: 'left',
        showIcon: false,
        id: '67fea206974013794a577002'
      },
      {
        blockType: 'faq',
        faq: [
          {
            pergunta: 'O que é o apadrinhamento de gatos',
            resposta:
              'O apadrinhamento é uma forma de ajudar financeiramente um gato resgatado, cobrindo suas necessidades básicas, como alimentação e cuidados veterinários. Em troca, você recebe atualizações, brindes e fotos exclusivas do seu afilhado.',
            id: '67fea218974013794a577005'
          },
          {
            pergunta: 'Como funciona o apadrinhamento',
            resposta:
              'Ao escolher um gatinho, você se compromete a doar um valor mensal para ajudar nos custos de alimentação e saúde. Nós oferecemos atualizações regulares sobre o gato apadrinhado.',
            id: '67fea221974013794a577006'
          },

          {
            pergunta: 'Posso apadrinhar mais de um gato?',
            resposta:
              'Sim! Você pode adotar ou apadrinhar quantos gatos desejar, desde que consiga suprir suas necessidades com responsabilidade e carinho.',
            id: '67fea227974013794a577007'
          },

          {
            pergunta: 'Quais são os custos de adoção e apadrinhamento',
            resposta:
              'A adoção de um gato envolve uma pequena taxa que cobre os custos veterinários iniciais, como vacinas e castração. O apadrinhamento possui valores mensais que variam de acordo com as necessidades do gato, e você pode escolher um plano adequado para você.',
            id: '67fea236974013794a577008'
          },

          {
            pergunta: 'Quais formas de pagamento são aceitas para doações e apadrinhamentos',
            resposta:
              'Aceitamos transferências bancárias, PIX e pagamentos via cartão de crédito. Consulte a página de “Colabore” para mais detalhes.',
            id: '67fea23f974013794a577009'
          },

          {
            pergunta: 'Posso cancelar o apadrinhamento?',
            resposta:
              'Sim, você pode cancelar a qualquer momento, mas nós pedimos que nos avise com antecedência para que possamos encontrar outro padrinho para o gato. Continuar o suporte é muito importante para a saúde e o bem-estar do animal.',
            id: '67fea24a974013794a57700a'
          },

          {
            pergunta: 'Posso ajudar a ONG além de adotar ou apadrinhar?',
            resposta:
              'Você pode ajudar de várias formas: doando ração, medicamentos, cobertores, ajudando com transporte ou contribuindo financeiramente. Além disso, compartilhar nosso trabalho nas redes sociais ajuda muito a espalhar nossa causa!',
            id: '67fea255974013794a57700b'
          },

          {
            pergunta: 'Como são utilizados os recursos das doações',
            resposta:
              'Todas as doações são usadas para cuidar dos gatos resgatados, cobrindo despesas como alimentação, tratamentos médicos, castração e melhorias no espaço onde eles vivem.',
            id: '67fea25c974013794a57700c'
          }
        ],
        id: '67fea215974013794a577004'
      }
    ],
    meta: {
      title: 'Contato e Perguntas Frequentes | Gatil dos Resgatados',
      description:
        'Tire suas dúvidas sobre o apadrinhamento de gatos, contribuições e como ajudar o Gatil dos Resgatados. Veja as perguntas frequentes respondidas.',
      image: image1
    }
  };

  return contato;
}

export default await createContato();
