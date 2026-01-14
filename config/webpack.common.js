const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash:8].js',
    path: resolve(__dirname, '../dist'),
    clean: true
  },
  module: {
    rules: [
      {
        // 匹配 .ts, .tsx, .js, .jsx 文件
        test: /\.(ts|tsx|js|jsx)$/,
        // 排除 node_modules，提升编译速度
        exclude: /node_modules/,
        use: [{
          loader: 'swc-loader',
          options: {
            jsc: {
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDev,
                  refresh: isDev
                }
              }
            },
            configFile: isDev ? '.dev.swcrc' : '.swcrc'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024  // 8KB 以下转 base64，减少请求
          }
        },
        generator: {
          filename: 'images/[name].[hash:8][ext]'  // 自定义输出路径
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, '../src'),
      '@u': '@/utils',
      '@c': '@/components',
      '@s': '@/store',
      '@p': '@/pages',
      '@a': '@/assets'
    }
  }
};
