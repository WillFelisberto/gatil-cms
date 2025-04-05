import { CollectionAfterChangeHook } from 'payload';
import { shouldTriggerDeploy } from '../../utils/triggerVercelIfContentChanged';

export const CollectionTriggerVercelIfChanged: CollectionAfterChangeHook = async ({
  doc,
  previousDoc
}) => {
  await shouldTriggerDeploy({
    newDoc: doc,
    previousDoc
  });
};
