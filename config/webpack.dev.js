const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ThemedProgressPlugin = require('progress-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: '../dist',
    hot: true,
    port: 3001
  },
  plugins: [
    new ThemedProgressPlugin,
    new ReactRefreshWebpackPlugin
  ]
});
