// const { path } = require("koa/lib/request");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { default: merge } = require("webpack-merge");
const base = require('./webpack.base')

/*
 * :file description: 
 * :name: \mini-vue-ssr\scripts\webpack.server.js
 * :author: 帅哥
 * :copyright: (c) 2022, gegui
 * :date created: 2022-01-17 11:17:13
 * :last editor: 帅哥
 * :date last edited: 2022-01-17 14:37:07
 */
module.exports = merge(base, {
    entry: { server: path.resolve(__dirname, '../src/server-entry.js') },
    target: 'node',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.srr.html'),
            filename: 'server.html',
            excludeChunks: ['server'],
            minify: false
        })
    ]
})