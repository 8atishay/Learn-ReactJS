var React = require('react');

class Clock extends React.Component{
    formatSeconds= ()=>{
        var seconds = totalSeconds%60;
        var minutes = Math.floor(totalSeconds/60);

        if(seconds<10){
            seconds = '0'+seconds;
        }
        if(minutes<10){
            minutes = '0'+minutes;
        }
        return minutes+':'+seconds;
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
module.exports = Clock;