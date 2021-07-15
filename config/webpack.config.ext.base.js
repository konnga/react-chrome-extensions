/*
 * @Author: WangJiaCheng
 * @Date: 2020-07-29 11:21:25
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:46:17
 * @Description:  扩展程序配置
 */ 
const path = require("path");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
const smp = new SpeedMeasurePlugin();

// 缓存loader编译结果，提高二次打包速度
const loaders = ['babel-loader', 'less-loader']

module.exports = smp.wrap({
  entry: {
    index: path.resolve("src/index.js"),
    options: path.resolve("src/options/index.js"),
    background: path.resolve("src/background/index.js")
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@": path.resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: ['cache-loader', ...loaders],
        include: path.resolve('src'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader"},
      },
      {
        test: /\.less$/,
        exclude: /\.module\.(less)$/,
        use: [
          "style-loader",
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: { implementation: require("less"), javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: 'images'
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {   // 抽离第三方插件
              test: /node_modules/,   // 指定是node_modules下的第三方包
              chunks: 'initial',
              name: 'vendor',  // 打包后的文件名，任意命名    
              // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
              priority: 100    
          }
      }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new LodashModuleReplacementPlugin,
    // new Visualizer({
    //   filename: './statistics.html'
    // }),
  ]
});