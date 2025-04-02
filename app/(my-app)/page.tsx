import Image from 'next/image';
import { FaCat } from 'react-icons/fa';

import { SectionCat } from './components/Molecules/SectionCat';

type ContentProps = {
  dark?: boolean;
  title?: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
  img: string;
  imagePosition?: 'left' | 'right';
};

const Content = ({
  dark = false,
  title,
  text,
  buttonText,
  buttonLink,
  img,
  imagePosition = 'right'
}: ContentProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div
      className={`h-full flex flex-col-reverse md:flex-row ${
        isImageLeft ? 'md:flex-row-reverse' : ''
      } items-center justify-center gap-8 px-4 py-12`}
    >
      {/* Texto */}
      <div className="md:w-1/2 text-center md:text-left">
        {title && <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>}
        <p className="text-lg md:text-xl leading-relaxed mb-8">{text}</p>

        {buttonText && buttonLink && (
          <div
            className={`flex justify-center ${isImageLeft ? 'md:justify-end' : 'md:justify-start'}`}
          >
            <a
              href={buttonLink}
              className={`flex w-fit items-center gap-2 cursor-pointer px-6 py-2 rounded-full font-bold transition-colors duration-200 text-sm md:text-base ${
                dark
                  ? 'bg-[#A1DFFF] text-[#013274] hover:bg-[#7cd0f3]'
                  : 'bg-[#013274] text-white hover:bg-[#001f4c]'
              }`}
            >
              {buttonText}
              <span className="w-5 h-5">
                <FaCat className={dark ? 'text-[#013274]' : 'text-white'} />
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Imagem */}
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={img}
            alt={title || 'Imagem de gato para adoção'}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-xl shadow-lg object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <SectionCat>
        <Content
          title="Gatil dos Resgatados"
          text="Bem-vindo ao nosso Gatil! Aqui, cada gatinho tem uma história especial de resgate e superação. Nosso objetivo é proporcionar a eles uma nova chance de vida, e você pode fazer parte disso! Explore nossas histórias e descubra como apadrinhar ou adotar um amigo peludo."
          img="/pages/home/gato1.png"
          buttonText="Quem somos"
          buttonLink="/sobre-o-projeto"
          imagePosition="left"
        />
      </SectionCat>
      <SectionCat dark>
        <Content
          dark
          text="Conheça nossos gatinhos resgatados e transforme a vida de um deles! Ao apadrinhar, você contribui diretamente para os cuidados diários, tratamentos e bem-estar dos nossos pequenos heróis. Clique abaixo e escolha o seu novo afilhado."
          img="/pages/home/gato2.png"
          buttonText="Apadrinhe"
          buttonLink="/apadrinhe"
          imagePosition="right"
        />
      </SectionCat>
      <SectionCat>
        <Content
          text="Sua colaboração pode fazer toda a diferença! Ao contribuir com nossa causa, você nos ajuda a oferecer cuidados essenciais, tratamentos veterinários e abrigo para os gatinhos resgatados. Cada doação, por menor que seja, tem um impacto enorme na vida desses animais, permitindo que continuemos a salvá-los e a proporcionar uma nova chance de felicidade. Junte-se a nós e seja parte dessa transformação!"
          img="/pages/home/gato3.png"
          buttonText="Colabore"
          buttonLink="/colabore"
          imagePosition="left"
        />
      </SectionCat>
    </>
  );
}
