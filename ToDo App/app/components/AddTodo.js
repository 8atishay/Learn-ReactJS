var React = require('react')

class AddTodo extends React.Component{
    handleSubmit= (e)=>{
        e.preventDefault= this.refs.todoText.nodeValue;
        var todoText = this.refs.todoText.value;
        
        // var that = this.props.that;

        if(todoText.length>0){
            
            this.props.onAddTodo(todoText);

            this.refs.todoText.value='';    
        }else{
            this.refs.todoText.focus();
        }
    }
    
    render(){
        return(
            <div className='container__footer'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref='todoText' placeholder='What do you need to do?'/>
                    <button type='submit' className='button expanded'>Add Todo</button>
                </form>
            </div>
        )
    }
}
module.exports=AddTodo;