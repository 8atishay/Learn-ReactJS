var React = require('react');

class WelcomeMessage extends React.Component{ 
    render(){
        var city = this.props.city;
        var state = this.props.state;

        return (
            <div>
                <h3>My city is {city}</h3>
                <h3>My state is {state}</h3>
            </div>
        )
    }   
}

module.exports= WelcomeMessage;