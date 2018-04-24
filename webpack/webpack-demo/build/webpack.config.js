const path = require('path');
const webpack = require('webpack')
const IP = require('ip').address()

module.exports = {
  mode: 'production',
  // 入口文件
  entry: './src/index.js',
  // 打包结果
  output: {
    /*
     ** 所有输出文件的目标路径
     */
    path: path.resolve(__dirname, '../dist'),

    /*
     ** 打包文件名  可以自定义
     */
    filename: '[name].js',

    /*
     ** 输出解析文件的目录  url--相对于HTML页面
     */
    publicPath: '../'
  },
  devServer: {
    /*
    当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息
    none, error, warning 或者 info（默认值
    */
    clientLogLevel: 'warning',
    host: IP,
    open: true,
    hot: true,
    inline: true,
    /*
    告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    https://www.webpackjs.com/configuration/dev-server/#devserver-contentbase
    */
    // contentBase: false, // since we use CopyWebpackPlugin.
    // 一切服务都启用gzip压缩
    compress: true,
    /*
      假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。
      默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。
    */
    publicPath: '/',
    // 代理服务器 https://www.webpackjs.com/configuration/dev-server/#devserver-proxy
    proxy: {}
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      }
    ]
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}