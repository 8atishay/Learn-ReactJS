// If you meant to render a React component, 
// start its name with an uppercase letter.

class Welcome extends React.Component{
    render(){
        return (

            // only one parent element
            <div>
                <h1>Welcome to react component</h1>
                <p>this is my first welcome component</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Welcome/>,
    document.getElementById('app')
);
