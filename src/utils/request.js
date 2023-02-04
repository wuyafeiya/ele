import axios from "axios";
import store from "@/store";
import { getToken } from "./auth";
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.getters.TOKEN) {
    // 每次请求带上token
    config.headers['X-Token'] = getToken()
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default instance