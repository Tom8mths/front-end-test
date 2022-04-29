import axios from 'axios';

export function setupAPIClient() {
  const api = axios.create({
    baseURL: 'http://localhost:3001',
  });

  return api;
}
