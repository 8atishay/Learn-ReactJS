writeToscreen('Initial','dark text-white');

function writeToscreen(msg,level){
    var element = document.getElementById('screen');
    element.innerHTML+='<div class ="log bg-' +level + '">'+
    '&nbsp;&nbsp'+
    msg + '</div>';
}


class Welcome extends React.Component{
    
    state=(function (){
        writeToscreen('GetInitialState','light');
        return {show:1}
    })();
    update=()=>{
        writeToscreen('Updating State','dark text-white');
        this.setState({show:2});
    }
    render(){
        writeToscreen('Render','success');
        return(
            <div>
                this.state.show: {this.state.show}<br/>
                this.state.hello:{this.props.hello}<br/>
                <hr/>
                <button className='btn btn-success' onClick={this.update}>Update the state</button>
            </div>
        )
    }
    componentWillMount(){
        writeToscreen('ComponentWillMount','warning');
    }
    componentDidMount(){
        writeToscreen('ComponentDidMount','warning');
    }
    shouldComponentUpdate(){
        writeToscreen('shouldComponentUpdate','light');
        return true;
    }
    componentWillReceiveProps(){
        writeToscreen('componentWillRecieveProps','warning');      
    }
    componentWillUpdate (){
        writeToscreen('ComponentWillUpdate','warning');
    } 
    componentDidUpdate (){
        writeToscreen('ComponentDidUpdate','warning');
    }
    componentWillUnmount (){
        writeToscreen('ComponentWillUnmount','danger');
    }   
}
Welcome.defaultProps=(function (){
    writeToscreen('GetDefaultProps','light');
    return{hello:2}
})();


class App extends React.Component{
    state={id:1}
    update= ()=>{
        writeToscreen('Updating props','dark text-white');
        this.setState({id:2});
    }
    render(){
        return(
            <div>
                <hr/>
                <Welcome hello={this.state.id}/>
                <hr/>
                <button className='btn btn-dark text-white' onClick={this,this.update}>
                    Update Props</button>
            </div>
        )
    }
}

var unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click',unmount);

function unmount (){
    writeToscreen('Unmounting','light');
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    unmountBtn.remove();
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)