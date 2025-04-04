/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '@payload-config';
import type { NextRequest } from 'next/server';
import { getPayload } from 'payload';

import { createSponsorships } from '@/app/(payload)/endpoints/create-sponsorships';

export async function POST(req: NextRequest) {
  const payload = await getPayload({ config });

  req.headers.set('payload-secret', payload.secret);
  // Cria um objeto "fake" de PayloadRequest, que é o que seu handler espera
  const handlerReq = Object.assign(req, { payload });

  // Executa o handler e retorna a resposta
  return createSponsorships(handlerReq as any);
}
