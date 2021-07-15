/*
 * @Author: WangJiaCheng
 * @Date: 2020-07-29 10:27:39
 * @LastEditors: WangJiaCheng
 * @LastEditTime: 2021-07-15 09:57:52
 * @Description: webpack production config
 */
const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.config.ext.base");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve("extensions", "chrome")
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("public"),
        }
      ],
    }),
    new HtmlPlugin({
      template: path.resolve("public/index.html"),
      filename: "index.html",
      chunks: ["index"],
      hash: true,
      title: "PROXY - OPTIONS"
    }),
    new HtmlPlugin({
      template: path.resolve("public/options.html"),
      filename: "options.html",
      chunks: ['vendor', 'options'],
      hash: true,
      title: "OPTIONS HTML"
    })
  ]
});
