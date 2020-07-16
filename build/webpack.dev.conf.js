const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const devConfig = (env) => webpackMerge(baseConfig(env), {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = devConfig;
