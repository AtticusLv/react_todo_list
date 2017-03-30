var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  
  module:{
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss|css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true
  }
}