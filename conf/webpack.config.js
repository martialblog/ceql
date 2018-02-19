const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: {
    'ceql': './src/index.js',
    'ceql.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'window'
  },
  plugins: [
    new MinifyPlugin({},{
      test: /\.min\.js($|\?)/
    })
  ]
}
