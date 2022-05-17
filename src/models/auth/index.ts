import { createEffect, createStore } from 'effector';
import axiosInstance from '../../api';
import { authEndpoints } from './auth.api';
import { Credentials, Token } from './auth.types';
import isFunction from 'lodash-es/isFunction';

type AuthStore = {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: Token | null;
};

export const $auth = createStore<AuthStore>({
  isLoading: true,
  isAuthenticated: false,
  token: null,
});

export const loginFx = createEffect(async (credentials: Credentials) => {
  const { data: token } = await authEndpoints.login(credentials);
  if (axiosInstance.defaults.headers && isFunction(axiosInstance.defaults.headers?.set))
    axiosInstance.defaults.headers.set('Authorize', `Bearer_${token.accessToken}`);
  return token;
});
