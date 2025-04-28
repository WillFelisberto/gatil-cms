import config from '@payload-config';
import { getPayload } from 'payload';

import adote from './seedData/adote';
import apadrinhe from './seedData/apadrinhe';
import cat1 from './seedData/cat1';
import cat2 from './seedData/cat2';
import colabore from './seedData/colabore';
import contato from './seedData/contato';
import guardian from './seedData/guardian';
import home from './seedData/home';
import politicaAdocao from './seedData/politica-adocao';
import siteConfig from './seedData/site-config';
import sobre from './seedData/sobre';
import termosApadrinhamento from './seedData/termos-apadrinhamento';
import user from './seedData/user';

const seed = async () => {
  const payload = await getPayload({ config });
  const start = Date.now();

  const log = (msg: string) => payload.logger.info(`✓ ${msg}`);
  const logError = (err: unknown) => payload.logger.error(`✗ ${String(err)}`);

  try {
    log('Seeding database...');

    await payload.create({ collection: 'users', data: user });
    log(`Created admin: ${user.email} / ${user.password}`);

    log('=== Criando tutor ===');
    await payload.create({ collection: 'guardians', data: guardian });
    log('Created guardian');

    log('=== Criando gatos ===');
    const cat1Data = await cat1(payload);
    await payload.create({ collection: 'cats', data: cat1Data });
    log('Created cat1');

    const cat2Data = await cat2(payload);
    await payload.create({ collection: 'cats', data: cat2Data });
    log('Created cat2');

    log('=== Criando páginas globais ===');

    await payload.db.drizzle.$client.execute('PRAGMA foreign_keys = OFF;');

    const homeData = await home(payload);
    await payload.updateGlobal({ slug: 'homepage', data: homeData });

    const termosApadrinhamentoData = await termosApadrinhamento(payload);
    await payload.updateGlobal({ slug: 'politicaApadrinhamento', data: termosApadrinhamentoData });

    const politicaAdocaoData = await politicaAdocao(payload);
    await payload.updateGlobal({ slug: 'politicaAdocao', data: politicaAdocaoData });

    const apadrinheData = await apadrinhe(payload);
    await payload.updateGlobal({ slug: 'apadrinhe', data: apadrinheData });

    const colaboreData = await colabore(payload);
    await payload.updateGlobal({ slug: 'colabore', data: colaboreData });

    const contatoData = await contato(payload);
    await payload.updateGlobal({ slug: 'contato', data: contatoData });

    const adoteData = await adote(payload);
    await payload.updateGlobal({ slug: 'adote', data: adoteData });

    const sobreData = await sobre(payload);
    await payload.updateGlobal({ slug: 'sobre', data: sobreData });

    await payload.updateGlobal({ slug: 'site-config', data: siteConfig });
    await payload.db.drizzle.$client.execute('PRAGMA foreign_keys = ON;');

    log('All globals updated!');

    const duration = ((Date.now() - start) / 1000).toFixed(2);
    log(`✓ Seed completed in ${duration}s`);
    process.exit(0);
  } catch (err) {
    logError(err);
    process.exit(1);
  }
};

(async () => {
  await seed();
})();
