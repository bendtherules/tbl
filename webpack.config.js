const path = require('path');
const webpack = require('webpack');
const supportObjectRestSpread = require('@babel/plugin-proposal-object-rest-spread');

module.exports = {
  entry: {
    tbl: './index.js',
    'tbl.min': './index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'tbl',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [supportObjectRestSpread],
          },
        },
      },
    ],
  },
};
