const path = require('path');

module.exports = {
  entry: './public/MainApp.js',
  output: {
    filename: 'public/bundle.js',
    path: __dirname
  },
  resolve:{
    // extensions:['.js'],
    alias:{
      WelcomeMain:__dirname+'/public/components/WelcomeMain.js',
      WelcomeForm:__dirname+'/public/components/WelcomeForm.js',
      WelcomeMessage:__dirname+'/public/components/WelcomeMessage.js',
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