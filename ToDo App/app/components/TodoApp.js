var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi');

class TodoApp extends React.Component{
    state={
        showCompleted:false,
        searchText:'',
        todos: TodoApi.getTodos()
    }

    componentDidUpdate(){
        TodoApi.setTodos(this.state.todos);
    }

    handleAddTodos=(todotext)=>{
        // debugger;
        this.setState({
            showCompleted:false,
            searchText:'',
            todos: [
                ...this.state.todos,
                {
                    id:uuid(),
                    text:todotext,
                    completed:false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    }

    handleToggle=(id)=>{
        var updatedTodos= this.state.todos.map((todo)=>{
            if(todo.id == id){
                todo.completed = !todo.completed;
                // todo.completedAt = todo.completedAt ? moment().unix():undefined;
                todo.completedAt = moment().unix();
            }
            return todo;
        })
        this.setState({todos:updatedTodos});
        // debugger;
    }
    handleSearch=(showCompleted,searchText)=>{
        this.setState({
            showCompleted: showCompleted,
            // searchText: searchText.toLowercase()
            searchText: searchText.toLowerCase()
        })
    }

    render(){
        var {todos,showCompleted,searchText}= this.state;
        var filteredTodos = TodoApi.filteredTodos(todos,showCompleted,searchText);
        // debugger;
        return(
            <div className="todo-list-card card">
                <h1 className='card-divider'>Todo App</h1>
                <div className='card-section'>
                    <div className='column small-centered small-11 medium-6 large-5'>
                        <div className='container'>
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodo onAddTodo = {this.handleAddTodos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports=TodoApp;