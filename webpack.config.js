let path = require("path")
let webpack = require("webpack")
let ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {

    return path.join(__dirname, '..', dir)
}

var webpackConfig = {

    module: {

        rules: [

            // babel-loader
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },

            // 为了统计代码覆盖率，对 js 文件加入 istanbul-instrumenter-loader
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                include: /src|packages/,
                enforce: 'post',
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }]
            },

        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}

module.exports = webpackConfig