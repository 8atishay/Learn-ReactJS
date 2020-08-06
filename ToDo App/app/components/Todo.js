var React = require('react');
// var ReactDOM = require('react-dom');
const moment = require('moment');

class Todo extends React.Component{
    render(){
        var {id,text,completed,createdAt,completedAt} = this.props;
        // debugger;
        var todoClassName = completed?'todo todo-completed':'todo';
        var renderDate = ()=>{
            var message = 'Created';
            var timestamp = createdAt;

            if(completed){
                message='Completed';
                timestamp = completedAt;
            }

            return message+moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        var onToggle=()=>{
            this.props.onToggle(id);
        }
        return(
            // <div className={todoClassName} onClick={()=>{this.props.onToggle(id);}}>
            <div className={todoClassName} >
                <div>
                    <input type='checkbox' checked={completed} onChange={onToggle}/>
                    Completed
                </div>
                <div>
                    <p>{text}</p>
                    <p className='todo__subtext'>{renderDate()}</p>
                </div>
            </div>
        )
    }
}

module.exports = Todo;