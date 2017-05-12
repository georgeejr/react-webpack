var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
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