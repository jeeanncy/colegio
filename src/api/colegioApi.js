import axios from 'axios';

const colegioApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default colegioApi;
