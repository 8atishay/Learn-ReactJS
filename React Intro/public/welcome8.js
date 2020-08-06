// Welcome Form ----> user input
// Welcome message ----> render
// Welcome Main -----> 

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

class WelcomeForm extends React.Component{

    onFormSubmit = event =>{
        event.preventDefault();
        var updates = {};

        var city = this.refs.city.value;
        var state = this.refs.state.value;

        if(city.length>0){
            this.refs.city.value="";
            updates.city=city;
        }
        if(state.length>0){
            this.refs.state.value="";
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

ReactDOM.render(
    <WelcomeMain city='Mumbai'/>,
    document.getElementById('app')
)