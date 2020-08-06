// If you meant to render a React component, 
// start its name with an uppercase letter.

class Welcome extends React.Component{
    state = {city: this.props.city};

    callme = (e) => {
        e.preventDefault();
        var city = this.refs.city.value;
        this.setState({city:city});
    }
    render(){
        var mycity = this.state.city;
        var mystate = this.props.state;
        return (
            // only one parent element
            <div>
                <h1>Welcome to {mycity} and the state is {mystate}</h1>
                <p>this is my first welcome component</p>
                <form onSubmit={this.callme}>
                    {/* istead of name we use ref */}
                    <input type='text' ref='city'/>
                    <button type='submit'>Click me</button>
                </form>
            </div>
        )
    }
}
Welcome.defaultProps = {
    city: 'Mumbai'
}

ReactDOM.render(<Welcome state= 'MAH'/>,
                document.getElementById('app'));
