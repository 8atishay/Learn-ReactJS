var React = require('react');

class WelcomeForm extends React.Component{

    onFormSubmit = event =>{
        event.preventDefault();
        var updates = {};

        var city = this.refs.city.value;
        var state = this.refs.state.value;

        if(city.length>0){
            // this.refs.city.value="";
            updates.city=city;
        }
        if(state.length>0){
            // this.refs.state.value="";
            updates.state=state;
        }
        this.props.collectdata(updates);
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    Enter your city: 
                    <input type="text" ref='city' placeholder='Enter City'></input>
                </div>
                <div>
                    Enter your state: 
                    <input type="text" ref='state' placeholder='Enter State'></input>
                    <br/>
                </div>
                <div>
                    <input type='submit' value="Submit"/>
                </div>
            </form>
        )
    }
}

module.exports = WelcomeForm;