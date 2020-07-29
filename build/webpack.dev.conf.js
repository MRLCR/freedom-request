const path = require('path');
const webpack = require('webpack');
const { merge: webpackMerge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

const resolve = (...args) => path.resolve(__dirname, '../', ...args);

const devConfig = (env) => webpackMerge(baseConfig(env), {
  mode: 'development',
  entry:  resolve('demo/index.ts'),
  output: {
    filename: 'bundle__demo.js',
    path: resolve('demo/dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    hot: true,
    disableHostCheck: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('demo/index.html'),
      filename: 'index.html',
    })
  ],
});

module.exports = devConfig;
