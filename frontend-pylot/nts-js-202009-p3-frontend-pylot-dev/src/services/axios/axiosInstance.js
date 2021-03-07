import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const API = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Authorization',
  },
});

API.interceptors.response.use(
  (response) =>
    new Promise((resolve) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      localStorage.removeItem('TOKEN');
      window.location = '/';
    }
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
);

export default API;
