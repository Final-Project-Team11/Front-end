import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getCookie } from '../auth/CookieUtils';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_SERVER,
};

const instnace: AxiosInstance = axios.create(config);

instnace.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    const token = getCookie('token');
    config.headers['Authorization'] = `${token}`;
    return config;
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
  }
);

instnace.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response;
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instnace;
