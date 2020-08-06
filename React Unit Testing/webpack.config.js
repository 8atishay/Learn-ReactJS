// const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/components/clock.js',
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  },
  node: {
    fs: 'empty'
  },
  resolve:{
    // extensions:['.js'],
    alias:{
      
      Clock:__dirname+'/public/components/clock.js',
    }
  },
  
  module:{
    rules: [
      {
        use:{
          loader:'babel-loader',
          options: {
            presets:['@babel/preset-env',
                     '@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties']
          }
        },
        test: /\.js?$/,
        exclude : /(node_modules)/
      }
    ]
  }
};