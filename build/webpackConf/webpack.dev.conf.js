/**
 * Created by zhongxinzhi on 18/2/19.
 */
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('../config');
const path = require('path')
let devWebpackConfig = merge(baseWebpackConfig,{
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    // host: HOST || config.dev.host,
    port: 8080 || config.dev.port,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    // quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: true,
    }
  },
  plugins:[
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
module.exports = devWebpackConfig
