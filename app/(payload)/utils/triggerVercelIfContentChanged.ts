// hooks/utils/triggerVercelIfContentChanged.ts

import { triggerVercelDeploy } from './triggerVercelDeploy';

const IGNORED_FIELDS = ['updatedAt', 'createdAt', '_status', '_id', '__v'];

const removeIgnoredFields = (obj: Record<string, any>): Record<string, any> => {
  const cleaned = { ...obj };
  IGNORED_FIELDS.forEach((field) => delete cleaned[field]);
  return cleaned;
};

export const shouldTriggerDeploy = async ({
  newDoc,
  previousDoc
}: {
  newDoc: Record<string, any>;
  previousDoc?: Record<string, any>;
}) => {
  const cleanNew = removeIgnoredFields(newDoc);
  const cleanPrev = removeIgnoredFields(previousDoc || {});

  const changed = JSON.stringify(cleanNew) !== JSON.stringify(cleanPrev);

  if (changed) {
    console.log('Conteúdo relevante alterado. Disparando deploy...');
    await triggerVercelDeploy();
  } else {
    console.log('Nenhuma mudança relevante detectada. Deploy não disparado.');
  }
};
