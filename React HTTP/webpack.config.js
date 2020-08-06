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
      WeatherMain:__dirname+'/public/components/WeatherMain.js',
      WeatherForm:__dirname+'/public/components/WeatherForm.js',
      WeatherMessage:__dirname+'/public/components/WeatherMessage.js',
      Api:__dirname+'/public/api/weatherapi.js',
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