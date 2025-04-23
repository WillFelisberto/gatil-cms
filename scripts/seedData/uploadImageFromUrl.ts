import config from '@payload-config';
import { createWriteStream, promises as fs } from 'fs';
import { get } from 'https';
import path from 'path';
import { getPayload } from 'payload';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Faz o download de uma imagem por URL e a insere na collection `media` do PayloadCMS.
 * @param url URL da imagem (deve ser diretamente acessível via HTTPS)
 * @param alt Texto alternativo para a imagem
 * @returns ID da imagem criada no PayloadCMS
 */
export const uploadImageFromUrl = async (
  url: string,
  alt: string = 'Imagem automática'
): Promise<string> => {
  const payload = await getPayload({ config });

  const timestamp = Date.now();
  const tempFilename = `temp-${timestamp}.jpg`;
  const tempPath = path.resolve(__dirname, tempFilename);

  // Download da imagem
  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(tempPath);
    get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Erro ao baixar imagem: HTTP ${res.statusCode}`));
      }

      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });

  // Verificar se o arquivo baixado é válido
  const stats = await fs.stat(tempPath);
  if (stats.size < 1024) {
    throw new Error(`Arquivo baixado está vazio ou corrompido: ${tempPath}`);
  }

  // Criar a imagem na collection media (sem passar filename)
  const image = await payload.create({
    collection: 'media',
    filePath: tempPath,
    data: {
      alt
    }
  });

  // Remover o arquivo temporário
  await fs.unlink(tempPath);

  return image.id as string;
};
