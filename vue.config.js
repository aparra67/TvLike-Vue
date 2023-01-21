const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://moviesback2022.herokuapp.com/',
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TvLike.github.io/'
    : '/'
})
