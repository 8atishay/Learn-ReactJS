var React = require('react');

class WeatherForm extends React.Component{

    onFormSubmit = event =>{
        event.preventDefault();
        
        var location = this.refs.location.value;

        if(location.length>0){
            this.refs.location.value="";
            this.props.onSearch(location);
        }
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    Enter your location: 
                    <input type="text" ref='location' placeholder='Enter location'></input>
                </div>
                <div>
                    <input type='submit' value="Check Weather"/>
                </div>
            </form>
        )
    }
}

module.exports = WeatherForm;