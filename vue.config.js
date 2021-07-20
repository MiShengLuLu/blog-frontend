module.exports = {
  // 此代理仅针对本地开发
  devServer: {
    proxy: {
      '/api': {
        target: process.env.GRIDSOME_API_URL,
        changeOrigin: true, // 将请求头中的 host 配置为 target 的内容
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}