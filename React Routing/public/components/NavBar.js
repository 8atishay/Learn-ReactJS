var React = require('react');
var {NavLink} = require('react-router-dom');

class NavBar extends React.Component{
    render(){
        return (
            <div>
                <h2>
                    Welcome to NavBar  
                </h2>
                <ul>
                    <li><NavLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/login'>Login</NavLink></li>
                    <li><NavLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/register'>Register</NavLink></li>
                    <li><NavLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/contactus'>Contact Us</NavLink></li>
                    <li><NavLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/weather'>Weather</NavLink></li>
                </ul>
            </div>
        )
    }
}

module.exports = NavBar;