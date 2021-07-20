/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'
import Cookie from '@/utils/cookie'

const token = Cookie.getAttribute('TOKEN_KEY');

const request = axios.create({
  // 配置选项
  baseURL: process.env.NODE_ENV === 'development' ? `${process.env.GRIDSOME_API_URL}` : '/api'
})

if (token) {
  request.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// 请求拦截器
request.interceptors.request.use(config => {
  // 返回 config 配置对象
  return config
}, error => {
  return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default request