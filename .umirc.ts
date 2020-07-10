import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  chainWebpack: (config) => {
    config.plugin('AntdDayjsWebpackPlugin').use(require('antd-dayjs-webpack-plugin'));
  }
});
