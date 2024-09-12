import axios from 'axios';

const API_URL = 'https://assignment.stage.crafto.app';
const MEDIA_UPLOAD_URL = 'https://crafto.app/crafto/v1.0/media/assignment/upload';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export const login = async (username: string, otp: string) => {
  const response = await api.post('/login', { username, otp });
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(MEDIA_UPLOAD_URL, formData);
  return response.data;
};

export const createQuote = async (text: string, mediaUrl: string) => {
  const response = await api.post('/postQuote', { text, mediaUrl });
  return response.data;
};

export const getQuotes = async (limit: number, offset: number) => {
  const response = await api.get(`/getQuotes?limit=${limit}&offset=${offset}`);
  return response.data;
};