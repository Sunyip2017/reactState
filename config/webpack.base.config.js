const path = require('path')

const webpackBaseConfig = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename:'[name].[fullhase:4].js'
    },
    resolve: {
        extensions: ['.js','.jsx','.tsx']
    },
    module: {
        rules: [
            {
                test:/\.js[x]/,
                use:'babel-loader'
            },
            {
                test:/\.ts[x]/,
                use:'ts-loader'
            },
            {
                test:/\.(sc|c)ss/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
}

module.exports = webpackBaseConfig