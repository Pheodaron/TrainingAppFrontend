import axiosInstance from '../../api';
import { Credentials, Token } from './auth.types';

export const authEndpoints = {
  registration: (data: any) => axiosInstance.post<boolean>('/app/register', data),
  login: (data: Credentials) => axiosInstance.post<Token>('/app/login', data),
  forgotPassword: (data: any) => axiosInstance.post('/forgot/password', data),
  getProfile: (username: any) => axiosInstance.get(`/user/get/${username}`),
  refreshToken: (data: any) => axiosInstance.post('/app/refresh-token', data),
  test: () => axiosInstance.get('/app/test/get'),
};
