'use strict';

const path = require('path');
const webpack = require('webpack');
// Webpack Plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'cheap-source-map',

  //
  entry: {
    'vendor': [
      // Polyfills
      'core-js/client/shim',
      'zone.js/dist/zone',
      'zone.js/dist/long-stack-trace-zone',
      // Angular2
      '@angular/common',
      '@angular/common/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/core',
      '@angular/router'
    ],
    'app': [
      './src/index'
    ]
  },

  // Config for our build files
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
      // Support for .ts files.
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname, 'src')
    ),
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
  ],

  // our Development Server configs
  // our Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    publicPath: '/build'
  }
};
