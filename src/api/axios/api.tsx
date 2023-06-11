import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getCookie } from '../auth/CookieUtils';
const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_SERVER,
};

export interface ConvertError {
  status: number;
  message: string;
  data: any;
}

const convertErrorResponse = (response: AxiosResponse): ConvertError => {
  return {
    status: response.status ?? 500,
    message: response.data.errorMessage ?? '알 수 없는 에러가 발생했습니다.',
    data: response.data,
  };
};

const apis: AxiosInstance = axios.create(config);

apis.interceptors.request.use(
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

apis.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response;
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log(error.response);
    return Promise.reject(convertErrorResponse(error.response));
  }
);

export default apis;
