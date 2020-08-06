const path = require('path');

module.exports = {
  mode:'development',
  entry: './app/app.js',
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  },
  resolve:{
    alias:{
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