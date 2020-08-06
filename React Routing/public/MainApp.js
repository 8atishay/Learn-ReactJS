var React = require('react');
var ReactDOM = require('react-dom');
// var LandingPage = require('LandingPage');
var Login = require('Login');
var Register = require('Register');
var ContactUs = require('ContactUs');
var WeatherMain = require('WeatherMain');
var {Route,Switch,  BrowserRouter} = require('react-router-dom');
// var {Router, IndexRoute,hashHistory, browserHistory} = require('react-router-dom');

const NavBar = require('./components/NavBar');

// For more info
// https://www.sitepoint.com/react-router-complete-guide/
// https://reactrouter.com/
function LandingPage() {
    return (
        <div className='container'>
            <NavBar/>
            <Switch>
              {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
              <Route path="/Register">
                <Register />
              </Route>
         
              <Route path="/Login">
                  <Login />
              </Route>
    
              <Route path="/ContactUs">
                  <ContactUs />
              </Route>
    
              <Route path="/weather">
                  <WeatherMain />
              </Route>
    
              {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
              <Route path="/">
                  <Login />
              </Route>
          </Switch>
          </div>
      );
  }
  

ReactDOM.render(
//   <Router history = {hashHistory}>
//     <Route path = "/"><LandingPage/>
//       <IndexRoute component = {Login} />
//       <Route component = {Login} />
//       {/* <Route path = "contactus" component = {ContactUs} />
//       <Route path = "register" component = {Register} />       */}
//       </Route>
//   </Router>

  <BrowserRouter>
    <LandingPage/>    
  </BrowserRouter>
  ,document.getElementById('app')
)

// export default MainApp;