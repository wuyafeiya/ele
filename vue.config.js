const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin:true
      }
    }
  },
});
