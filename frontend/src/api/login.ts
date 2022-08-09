import axios from 'axios';

const login = axios.create({});

login.defaults.baseURL = 'http://localhost:8080';

export const setTokenLocalStorage = (token: string) => {
  localStorage.setItem('token', token);
};

export const setTokenOnHeader = (token: string) => {
  login.defaults.headers.common['Authorization'] = `${token}`;
};

export default login;
