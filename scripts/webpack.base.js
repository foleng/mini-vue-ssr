/*
 * :file description: 
 * :name: \mini-vue-ssr\scripts\webpack.base.js
 * :author: 帅哥
 * :copyright: (c) 2022, gegui
 * :date created: 2022-01-17 11:16:58
 * :last editor: 帅哥
 * :date last edited: 2022-01-27 15:43:01
 */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        esMoudle: false
                    }
                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}