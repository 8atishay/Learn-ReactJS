const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  },
  // node: {
  //   fs: 'empty',
  //   net: 'empty'
  // },
  // resolve:{
  //   // extensions:['.js'],
  //   modules:[
  //     'node_modules',
  //     'app/components',
  //     'app/api'
  //   ],
  //   alias:{
  //     applicationStyles:'app/styles/app.scss'
  //   }
  // },
  
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // externals:{
  //   foundation:'Foundation'
  // },
  // plugins:[
  //   new webpack.ProvidePlugin({
  //     $:'jquery',
  //     jquery:'jquery'
  //   })
  // ]
};