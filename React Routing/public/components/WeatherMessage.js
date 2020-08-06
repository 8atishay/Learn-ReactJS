var React = require('react');

class WeatherMessage extends React.Component{ 
    render(){
        // var city = this.props.city;
        // var state = this.props.state;
        var {temp,location}=this.props;
        return (
            <div>
                <h3>My city is {location}</h3>
                <h3>My temperature is {temp}</h3>
            </div>
        )
    }   
}

module.exports= WeatherMessage;