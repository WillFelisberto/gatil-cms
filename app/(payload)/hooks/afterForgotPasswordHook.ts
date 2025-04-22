import { getPayload, type CollectionAfterForgotPasswordHook } from 'payload';
import config from '@payload-config';

const afterForgotPasswordHook: CollectionAfterForgotPasswordHook = async ({ args }) => {
  const { email } = args.data;
  const payload = await getPayload({ config });

  // Encontre o usuário pelo e-mail
  const users = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email
      }
    }
  });

  const user = users.docs[0];

  if (user) {
    // Atualize a flag firstLogin para false
    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        firstLogin: false
      }
    });
  }
};

export default afterForgotPasswordHook;
