import { uploadImageFromUrl } from './uploadImageFromUrl';

async function cat1() {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1');

  const cat = {
    nome: 'Gato Teste' as const,
    sexo: 'M' as const,
    createdAt: '2025-04-02T21:24:52.909Z',
    updatedAt: '2025-04-03T20:30:41.034Z',
    idade: '1 ano',
    descricao: 'Um gato muito fofo de testes',
    foto: image1,
    galeria: [],
    vacinas: [],
    vermifugacoes: [],
    castrado: true,
    dataEntrada: '2025-04-02T12:00:00.000Z',
    adotado: false,
    show: true,
    disponivelParaApadrinhamento: true
  };

  return cat;
}

export default cat1;
