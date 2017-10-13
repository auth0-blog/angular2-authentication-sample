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
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/core',
      '@angular/router',
      '@angular/http',
      // RxJS
      'rxjs',
      // Other
      'angular2-jwt'
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
    root: __dirname,
    extensions: [
      '',
      '.ts',
      '.js',
      '.json',
      '.css',
      '.html'
    ]
  },

  module: {
    preLoaders: [ { test: /\.ts$/, loader: 'tslint-loader' } ],
    loaders: [
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
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false
  },

  // our Development Server configs
  // our Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    publicPath: '/build'
  }
};
