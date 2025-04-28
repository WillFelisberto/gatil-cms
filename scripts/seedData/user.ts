import crypto from 'crypto';

const randomHex = crypto.randomBytes(4).toString('hex'); // Ex: 'a3f8c1b2'

const user = {
  email: `admin+${randomHex}@gatil.com`,
  password: `admin-${randomHex}`, // Ex: 'admin-a3f8c1b2'
  role: 'admin' as const,
  name: 'Admin' as string
};

export default user;
