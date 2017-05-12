var HtmlWebpackPlugin = require('html-webpack-plugin');
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sprii Front End Test',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        })

    ]
}