var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var api = require('Api');

class WeatherMain extends React.Component{
    state= {
        // location:'Shrinagar',
        // temp:10
        isLoading: false
    }
    handleSearch= (location)=>{

        var that = this;
        // because this cant be identifies inside other function

        this.setState({
            isLoading:true
        })

        api.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading:false
            })
        },function(err){
            that.setState({
                isLoading:false
            })
            alert(err);
        })
    }

    render(){
        // ES6 code make sure they have same name
        var {isLoading,temp,location}=this.state;

        function renderData(){
            if(isLoading){
                return <h3>Loading data... </h3>
            }else if (temp && location){
                return <WeatherMessage temp = {temp} location = {location}/>
            }
        }

        return(
            <div>
                {/* React components automatically re-render whenever there 
                is a change in their state or props. A simple update of the 
                state, from anywhere in the code, causes all the User Interface 
                (UI) elements to be re-rendered automatically. */}
                <h3>Weather Application</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderData()}
            </div>
        )
    }
}
WeatherMain.defaultProps= {
    location:'Pune',
    state:'MAH'
}

module.exports = WeatherMain;