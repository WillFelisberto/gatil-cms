export const triggerVercelDeploy = async (): Promise<void> => {
  try {
    if (!process.env.VERCEL_DEPLOY_HOOK) {
      throw new Error('VERCEL_DEPLOY_HOOK is not defined in the environment variables.');
    }

    const res = await fetch(process.env.VERCEL_DEPLOY_HOOK, {
      method: 'POST'
    });

    if (!res.ok) {
      console.error('Erro ao disparar deploy Vercel:', res.statusText);
    } else {
      console.log('Deploy na Vercel disparado com sucesso.');
    }
  } catch (error) {
    console.error('Erro ao disparar deploy Vercel:', error);
  }
};
