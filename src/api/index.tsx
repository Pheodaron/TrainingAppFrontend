import axios from 'redaxios';
import { authEndpoints } from '../models/auth/auth.api';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  // TODO: get token if stored
});

export const AllEndpoints = {
  auth: authEndpoints,
};

export default axiosInstance;
