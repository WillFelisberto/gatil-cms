import { fileTypeFromBuffer } from 'file-type';
import { stat, unlink, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';
import { Payload } from 'payload';

import { Media } from '@/payload-types';

export const uploadImageFromUrl = async (
  url: string,
  alt: string = 'Imagem automática',
  payload: Payload
): Promise<Media> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erro ao baixar imagem: HTTP ${res.status}`);

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const fileType = await fileTypeFromBuffer(buffer);
  if (!fileType) throw new Error('Tipo de arquivo não identificado.');

  const tempPath = path.join(os.tmpdir(), `image-${Date.now()}.${fileType.ext}`);
  await writeFile(tempPath, buffer);

  const fileStats = await stat(tempPath);
  if (fileStats.size < 1024) throw new Error('Arquivo corrompido ou muito pequeno');

  const image = await payload.create({
    collection: 'media',
    filePath: tempPath,
    data: { alt }
  });

  await unlink(tempPath);

  return image;
};
