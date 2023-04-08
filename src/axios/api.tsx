import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_SERVER,
};

const instnace: AxiosInstance = axios.create(config);

export default instnace;
