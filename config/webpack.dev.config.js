const path = require('path')
const webpack = require('webpack')
const  { merge } = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

const PORT = 8080
const webpackDevConfig = {
    mode:'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new HtmlWebpackPlugin({
            inject: 'body', // 注入的位置
            title:'React App',
            fileName:'index.html',
            template:path.join(__dirname,'../src/index.html')
        }),
        new OpenBrowserPlugin({
            url:`http://localhost:${PORT}/#/`
        }),
    ],
    devtool:'eval-source-map'
}

module.exports = merge(webpackBaseConfig,webpackDevConfig)