const path = require('path');

const devServerConfig = {
  proxy: {
    '/api': {
      target: '<url>',
      changeOrigin: true
    }
  }
};

module.exports = {
  devServer: devServerConfig,
  transpileDependencies: ['vuex-persist'],
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],

      alias: {
        '@service': path.join(__dirname, 'src', 'service'),
        '@views': path.join(__dirname, 'src', 'views'),
        '@utils': path.join(__dirname, 'src', 'utils'),

        '@plugins': path.join(__dirname, 'src', 'plugins'),

        '@components': path.join(__dirname, 'src', 'components'),

        // 注意： 静态资源通过src，不能这么设置。

        assets: path.join(__dirname, 'src', 'assets')
      }
    }
  }
};
