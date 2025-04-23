import config from '@payload-config';
import { createWriteStream, promises as fs } from 'fs';
import { get } from 'https';
import path from 'path';
import { getPayload } from 'payload';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const uploadImageFromUrl = async (
  url: string,
  alt: string = 'Imagem automática'
): Promise<string> => {
  const payload = await getPayload({ config });

  const timestamp = Date.now();
  const tempPath = path.resolve(__dirname, `temp-${timestamp}.jpg`);

  // Baixar imagem com https + stream
  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(tempPath);
    get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });

  // Criar imagem na collection media
  const image = await payload.create({
    collection: 'media',
    filePath: tempPath,
    data: { alt }
  });

  // Deletar imagem local
  await fs.unlink(tempPath);

  return image.id as string;
};
