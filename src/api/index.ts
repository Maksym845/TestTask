import axios from 'axios';

export const apiAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'content-type': 'application/json',
  },
});
