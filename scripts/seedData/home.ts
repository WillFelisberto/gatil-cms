import { Payload } from 'payload';

import { Homepage } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createHomeData(payload: Payload) {
  const [image1, image2, image3] = await Promise.all([
    uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1', payload),
    uploadImageFromUrl('https://placecats.com/700/700', 'Imagem 2', payload),
    uploadImageFromUrl('https://placecats.com/600/500', 'Imagem 3', payload)
  ]);

  const home: Partial<Homepage> = {
    layout: [
      {
        blockType: 'imageWithText',
        imagePosition: 'left',
        backgroundColor: 'light',
        image: image1.id,
        title: 'Gatil Dos Resgatados',
        text: 'Bem-vindo ao nosso Gatil! Aqui, cada gatinho tem uma história especial de resgate e superação. Nosso objetivo é proporcionar a eles uma nova chance de vida, e você pode fazer parte disso! Explore nossas histórias e descubra como apadrinhar ou adotar um amigo peludo.',
        ctaText: 'Quem somos',
        ctaLink: '/sobre-o-projeto'
      },
      {
        blockType: 'imageWithText',
        imagePosition: 'right',
        backgroundColor: 'dark',
        image: image2.id,
        text: 'Conheça nossos gatinhos resgatados e transforme a vida de um deles! Ao apadrinhar, você contribui diretamente para os cuidados diários, tratamentos e bem-estar dos nossos pequenos heróis. Clique abaixo e escolha o seu novo afilhado.',
        ctaText: 'Apadrinhe',
        ctaLink: 'apadrinhe'
      },
      {
        blockType: 'imageWithText',
        imagePosition: 'left',
        backgroundColor: 'light',
        image: image3.id,

        text: 'Sua colaboração pode fazer toda a diferença! Ao contribuir com nossa causa, você nos ajuda a oferecer cuidados essenciais, tratamentos veterinários e abrigo para os gatinhos resgatados. Cada doação, por menor que seja, tem um impacto enorme na vida desses animais, permitindo que continuemos a salvá-los e a proporcionar uma nova chance de felicidade. Junte-se a nós e seja parte dessa transformação!',
        ctaText: 'Colabore',
        ctaLink: 'colabore'
      }
    ],
    meta: {
      title: 'Gatil dos Resgatados | Adoção de Gatinhos Resgatados ',
      description:
        'Transforme vidas adotando um gatinho! O Gatil dos Resgatados resgata, cuida e prepara felinos para encontrar um novo lar cheio de amor. ',
      image: image2.id
    }
  };

  return home;
}

export default await createHomeData;
