const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./frontend/app.jsx",
  output: {
    path: path.join(__dirname, "/frontend/public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', `react`, 'stage-2']
        }
      }, {
        test: /(\.css)$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.(svg|png)(\?.*)?$/,
        loader: 'url-loader',
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "-loader"]
  }
};