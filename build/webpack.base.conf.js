const path = require('path');
const webpack = require('webpack');

const resolve = (...args) => path.resolve(__dirname, ...args);

const config = (env) => ({
  entry:  resolve('src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'),
        exclude: /node_moudles/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                ["@babel/plugin-transform-runtime"],
                ["@babel/plugin-syntax-dynamic-import"],
              ],
            }
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/i,
        use: [{
            loader: 'ts-loader'
        }],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Author: xiamu'),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(env),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js',  '.jsx', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
});

module.exports = config;
