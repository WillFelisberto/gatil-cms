import { Homepage } from '@/payload-types';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function createHomeData() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');
  const image2 = await uploadImageFromUrl('https://placecats.com/700/700', 'Imagem 2');
  const image3 = await uploadImageFromUrl('https://placecats.com/600/500', 'Imagem 3');

  const home: Partial<Homepage> = {
    layout: [
      {
        blockType: 'imageWithText',
        imagePosition: 'left',
        backgroundColor: 'light',
        image: image1,
        title: 'Gatil Dos Resgatados',
        text: 'Bem-vindo ao nosso Gatil! Aqui, cada gatinho tem uma história especial de resgate e superação. Nosso objetivo é proporcionar a eles uma nova chance de vida, e você pode fazer parte disso! Explore nossas histórias e descubra como apadrinhar ou adotar um amigo peludo.',
        ctaText: 'Quem somos',
        ctaLink: '/sobre-o-projeto',
        id: '67fe9e48d280d9a69bccaca4'
      },
      {
        blockType: 'imageWithText',
        imagePosition: 'right',
        backgroundColor: 'dark',
        image: image2,
        text: 'Conheça nossos gatinhos resgatados e transforme a vida de um deles! Ao apadrinhar, você contribui diretamente para os cuidados diários, tratamentos e bem-estar dos nossos pequenos heróis. Clique abaixo e escolha o seu novo afilhado.',
        ctaText: 'Apadrinhe',
        ctaLink: 'apadrinhe',
        id: '67fe9e88d280d9a69bccaca5'
      },
      {
        blockType: 'imageWithText',
        imagePosition: 'left',
        backgroundColor: 'light',
        image: image3,
        text: 'Sua colaboração pode fazer toda a diferença! Ao contribuir com nossa causa, você nos ajuda a oferecer cuidados essenciais, tratamentos veterinários e abrigo para os gatinhos resgatados. Cada doação, por menor que seja, tem um impacto enorme na vida desses animais, permitindo que continuemos a salvá-los e a proporcionar uma nova chance de felicidade. Junte-se a nós e seja parte dessa transformação!',
        ctaText: 'Colabore',
        ctaLink: 'colabore',
        id: '67fe9efcd280d9a69bccaca8'
      }
    ],
    meta: {
      title: 'Gatil dos Resgatados | Adoção de Gatinhos Resgatados ',
      description:
        'Transforme vidas adotando um gatinho! O Gatil dos Resgatados resgata, cuida e prepara felinos para encontrar um novo lar cheio de amor. ',
      image: image1
    }
  };

  return home;
}

export default await createHomeData();
