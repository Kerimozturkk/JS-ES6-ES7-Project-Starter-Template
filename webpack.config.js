const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'js/bundle.js',
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module:{
        rules: [
            { 
                test: /\.js$/,  //sonu js ile biten bütün dosyaları tarar. 
                exclude: /node_modules/, // node modules
                loader:"babel-loader" // bu işlemi babel loader yapar bunu
            }
        ]
    }
}



