const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: path.join(__dirname, '/public/js/'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },

    devtool: 'cheap-eval-source-map',

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.scss|css?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: '192.168.1.68',
        port: 8080,
        https: true,
        publicPath: "/public/",
        hot: true,
        historyApiFallback: true,
        inline: true
    }
}