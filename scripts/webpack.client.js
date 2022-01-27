/*
 * :file description: 
 * :name: \mini-vue-ssr\scripts\webpack.client.js
 * :author: 帅哥
 * :copyright: (c) 2022, gegui
 * :date created: 2022-01-17 11:17:06
 * :last editor: 帅哥
 * :date last edited: 2022-01-17 15:53:28
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { default: merge } = require("webpack-merge");
const base = require('./webpack.base');

module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, '../src/client-entry.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            // filename:'client.html'
        })
    ]
})