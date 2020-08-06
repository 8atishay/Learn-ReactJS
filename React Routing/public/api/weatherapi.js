var axios = require('axios');

// const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q={location}&appid=cd1d40d5a4ecbafef30a182dac3f686e';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
var appid = '&appid=cd1d40d5a4ecbafef30a182dac3f686e';
var unit = '&units=metric'//for celcius
// for farhenite use imperial
// for kelvin dont use unit

module.exports = {
    getTemp: function(location){
        // var el = encodeURIComponent(location);

        // var url = `${WEATHER_URL}&q=${el}`;
        // console.log(el);
        var url = WEATHER_URL+location+appid+unit;
        return axios.get(url).then(function(res){
            // // alert(res);
            // if(res.data.cod && res.data.message){
            //     throw new Error(res.data.message);
            // }
            // else{
                return res.data.main.temp;
            // }
        },function(res){
            throw new Error(res.data.message);
        })
    }
}