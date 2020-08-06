var React = require('react');
var WelcomeForm = require('WelcomeForm');
var WelcomeMessage = require('WelcomeMessage');

class WelcomeMain extends React.Component{
    state= {
        city:this.props.city,
        state:this.props.state
    }
    changeState= (updates)=>{
        this.setState(updates)
    }
    render(){
        var city=this.state.city;
        var state= this.state.state;
        return(
            <div>
                <WelcomeMessage city={city} state={state}/>
                <WelcomeForm collectdata={this.changeState}/>
            </div>
        )
    }
}
WelcomeMain.defaultProps= {
    city:'Pune',
    state:'MAH'
}

module.exports = WelcomeMain;