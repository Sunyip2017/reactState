const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

const webpackProConfig = {
    mode:'production',
    plugin: [
        new CleanWebpackPlugin({
            protectWebpackAssets: true
        }),
        new HtmlWebpackPlugin({
            inject: 'body', // 注入的位置
            title:'React App',
            fileName:'index.html',
            template:path.join(__dirname,'../src/index.html')
        })
    ]
}

module.exports = merge(webpackBaseConfig,webpackProConfig)