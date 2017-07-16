const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const dist = path.resolve(__dirname, "dist");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: [
        "./index.js"
        // the entry point of our app
    ],
    output: {
        path: dist,
        filename: "wikitags.bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: ["css-loader", "sass-loader"],
                    publicPath: dist
                })
            }
        ]
    },
    devServer: {
        port: 8081,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "WikiTags",
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: "index.html"
        }),
        new ExtractTextPlugin({
            filename: "wikitags.css",
            disable: false,
            allChunks: true
        }),
        new CopyWebpackPlugin([{from: "static"}])
    ]
};