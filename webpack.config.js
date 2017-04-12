const path = require('path');
module.exports = {
  entry: [ './src' ], // this is where our app lives
  devtool: 'source-map', // this enables debugging with source in chrome devtools
  output: {
    path: path.join(__dirname, 'public/build'), ////output files go to public/build
    publicPath: '/build/',
    filename: 'bundle.js', //package it all up in one bundle
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), //any static files should go in public
    historyApiFallback: true, // useful later
  },
};
