module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
