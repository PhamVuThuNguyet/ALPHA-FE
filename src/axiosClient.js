import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosClient;