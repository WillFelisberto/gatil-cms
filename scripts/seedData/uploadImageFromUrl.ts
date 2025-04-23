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
  const fileName = `gatil-${timestamp}.jpg`;
  const tempPath = path.resolve(__dirname, fileName);

  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(tempPath);
    get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Erro ao baixar imagem: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });

  const image = await payload.create({
    collection: 'media',
    filePath: tempPath,
    data: {
      alt,
      filename: fileName // <- Aqui o fix
    }
  });

  await fs.unlink(tempPath);

  return image.id as string;
};
