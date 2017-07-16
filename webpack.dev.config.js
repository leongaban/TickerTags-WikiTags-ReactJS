const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require("path")
const dist = path.resolve(__dirname, "dist")

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: [
    "react-hot-loader/patch",
    // activate HMR for React

    "webpack-dev-server/client?http://localhost:8080",
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    "webpack/hot/only-dev-server",
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    "./index.js"
    // the entry point of our app
  ],
  output: {
    path: dist,
    filename: "wikitags.bundle.js",
    publicPath: "/"
  },
  devtool: 'source-map',
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
    hot: true,
    quiet: true,
    publicPath: "/",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: false,
    port: 8081
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    //
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
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
    new CopyWebpackPlugin([{ from: "static" }])
  ]
};
