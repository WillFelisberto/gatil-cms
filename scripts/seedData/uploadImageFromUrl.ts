import config from '@payload-config';
import { fileTypeFromFile } from 'file-type';
import { createWriteStream, promises as fs } from 'fs';
import { get } from 'https';
import os from 'os';
import path from 'path';
import { getPayload } from 'payload';

export const uploadImageFromUrl = async (
  url: string,
  alt: string = 'Imagem automática'
): Promise<string> => {
  const payload = await getPayload({ config });

  const timestamp = Date.now();
  const rawTempPath = path.join(os.tmpdir(), `temp-${timestamp}`);
  const rawFilePath = `${rawTempPath}.download`;

  // Download da imagem
  await new Promise<void>((resolve, reject) => {
    const file = createWriteStream(rawFilePath);
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

  const fileType = await fileTypeFromFile(rawFilePath);
  if (!fileType) {
    throw new Error('Não foi possível detectar o tipo do arquivo.');
  }

  const finalPath = `${rawTempPath}.${fileType.ext}`;

  await fs.rename(rawFilePath, finalPath);

  const stats = await fs.stat(finalPath);
  if (stats.size < 1024) {
    throw new Error(`Arquivo baixado está vazio ou corrompido: ${finalPath}`);
  }

  const image = await payload.create({
    collection: 'media',
    filePath: finalPath,
    data: { alt }
  });

  await fs.unlink(finalPath);
  return image.id as string;
};
