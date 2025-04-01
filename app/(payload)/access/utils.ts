import { User } from 'payload-types';

export const checkRole = (allRoles: User['role'], user: User) => {
  return allRoles.includes(user.role);
};
