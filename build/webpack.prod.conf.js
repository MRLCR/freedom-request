const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const prodConfig = (env) => webpackMerge(baseConfig(env), {
  mode: 'production',
})

module.exports = prodConfig;
