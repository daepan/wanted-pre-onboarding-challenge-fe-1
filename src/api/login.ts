import axios from 'axios';

const login = axios.create({});

login.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setTokenOnHeader = (token: string) => {
  localStorage.setItem('token', token);
  login.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const setNoneBearerTokenOnHeader = (token: string) => {
  localStorage.setItem('token', token);
  login.defaults.headers.common['Authorization'] = `${token}`;
};


export default login;