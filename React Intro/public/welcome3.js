// If you meant to render a React component, 
// start its name with an uppercase letter.

class Welcome extends React.Component{
    render(){
        var mycity = this.props.city;
        var mystate = this.props.state;
        return (
            // only one parent element
            <div>
                <h1>Welcome to {mycity} and the state is {mystate}</h1>
                <p>this is my first welcome component</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Welcome city='pune' state= 'MAH'/>,
    document.getElementById('app')
);
