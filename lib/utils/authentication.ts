import { NextPageContext } from 'next';
import nextCookie from 'next-cookies';
import { verify } from 'jsonwebtoken';

import { variables } from './variables';
import { jsonWebToken } from '../types/jwt';

export const authentication = (ctx: NextPageContext) => {
  const { auth } = nextCookie(ctx);

  if (!auth) return false;

  return verify(auth, variables.secret_token, (err, dec) => {
    if (err) return false;
    return dec;
  });
};

export const validateRequest = (token: string) => {
  try {
    const decoded = verify(token, variables.secret_token);
    return decoded as jsonWebToken;
  } catch (err) {
    return false;
  }
};
