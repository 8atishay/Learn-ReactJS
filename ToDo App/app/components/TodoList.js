var React= require('react');
var Todo = require('Todo');

class TodoList extends React.Component{
    render(){
        var {todos}=  this.props;
        
        var renderTodos = ()=>{
            if(todos.lenght==0){
                return (
                    <p className='container__message'>Nothing To Do</p>
                )
            }
            
            return todos.map((todo)=>{
                return(
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                )
            })
        }
        return(
            <div>
                {renderTodos()}
            </div>
        )  
    }
}
module.exports= TodoList;