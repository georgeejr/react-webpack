var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,  'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {               
                test: /\.styl$/,
                use: ['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port:8000,
        stats: 'errors-only',
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sprii Front End Test',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates  

    ]
}