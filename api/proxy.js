/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target: process.env.GRIDSOME_API_URL,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 /api
      //   例如 /api/contacts 将被转发到 http://106.75.10.28:1337/contacts
      '^/api': ''
    }
  })(req, res)
}