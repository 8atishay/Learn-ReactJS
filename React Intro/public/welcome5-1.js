// An arrow function does not have its own this,
// but it has the this value of the enclosing 
// execution context. Arrow Functions lexically 
// bind their context so this actually refers 
// to the originating context.

// https://medium.com/@nikolalsvk/loosing-bind-this-in-react-8637ebf372cf

class Welcome extends React.Component{
    // state = {value: ''}
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
    callme = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
    }
    render(){
        var mycity = this.props.city;
        var mystate = this.props.state;
        return (
            // only one parent element
            <div>
                <h1>Welcome to {mycity} and the state is {mystate}</h1>
                <p>this is my first welcome component</p>
                <form onSubmit={this.callme}>
                    {/* istead of name we use ref */}
                    <input type='text' onChange={this.handleChange}/>
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
