const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        parallel: true, // 启用多线程压缩
        terserOptions: {
          compress: {
            // 移除 console
            drop_console: true,
            // 移除 debugger
            drop_debugger: true,
            // 计算常量表达式
            evaluate: true,
            // 内联函数
            inline: 3, // 更激进的内联
            // 合并变量
            join_vars: true,
            // 优化条件表达式
            conditionals: true,
            // 移除未使用的代码
            dead_code: true,
            // 优化 if 语句
            if_return: true,
            // 折叠常量
            collapse_vars: true,
            // 减少变量
            reduce_vars: true,
            // 计算次数
            passes: 3,
            // 纯函数调用
            pure_funcs: [],
            // 未使用的变量
            unused: true
          },
          mangle: {
            // 混淆变量名
            toplevel: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 基础框架库 - 放到 vendor 目录
        framework: {
          test: /[\\/]node_modules[\\/](react|react-dom|redux|react-redux)[\\/]/,
          name: 'framework',
          filename: 'vendor/[name].[contenthash:8].js',
          chunks: 'all',
          priority: 40
        }
      }
    }
  },
  plugins: [
    // 为框架文件添加 preload（高优先级预加载）
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      },
      include: 'allChunks',
      // 只预加载框架文件
      fileWhitelist: [/framework/]
    }),
    // 为其他文件添加 prefetch（低优先级预加载）
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      },
      include: 'allChunks',
      // 排除框架文件，只对其他文件 prefetch
      fileBlacklist: [/framework/, /\.map$/]
    }),
    new CompressionPlugin({
      // 输出文件名格式，[path] 原路径，[base] 原文件名
      filename: '[path][base].gz',
      
      // 压缩算法
      // 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw' | 自定义函数
      algorithm: 'gzip',
      
      // 匹配要压缩的文件
      test: /\.(js|css|html|svg|json)$/,
      
      // 只处理大于此大小的文件（字节）
      // 太小的文件压缩后可能反而更大
      threshold: 10240,  // 10KB
      
      // 只处理压缩率低于此值的文件
      // 0.8 表示压缩后体积需小于原体积的 80%
      minRatio: 0.8,
      
      // 是否删除原文件
      deleteOriginalAssets: false,
      
      // Gzip 压缩选项
      compressionOptions: {
        // 压缩级别 1-9，默认 6
        // 9 是最高压缩率，但速度最慢
        // 推荐 6-8 平衡压缩率和速度
        level: 9
      }
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg|json)$/,
      threshold: 10240,
      minRatio: 0.8,
      
      // Brotli 特有的压缩选项
      compressionOptions: {
        // 压缩级别 0-11，默认 11（最高压缩率，最慢）
        // 推荐 4-6 平衡压缩率和速度
        level: 11
      }
    })
  ]
});
