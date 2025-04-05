import { GlobalAfterChangeHook } from 'payload';
import { shouldTriggerDeploy } from '../../utils/triggerVercelIfContentChanged';

export const GlobalTriggerVercelIfChanged: GlobalAfterChangeHook = async ({ doc, previousDoc }) => {
  await shouldTriggerDeploy({
    newDoc: doc,
    previousDoc
  });
};
