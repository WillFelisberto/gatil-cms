import { Payload } from 'payload';

import { uploadImageFromUrl } from './uploadImageFromUrl';

async function cat2(payload: Payload) {
  const image1 = await uploadImageFromUrl('https://placecats.com/800/800', 'Imagem 1', payload);

  const cat = {
    nome: 'Gato Teste 2',
    sexo: 'M' as const,
    createdAt: '2025-04-02T21:24:52.909Z',
    updatedAt: '2025-04-03T20:30:41.034Z',
    idade: '3 ano',
    descricao: 'Um gato muito fofo de testes 2',
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

export default cat2;
