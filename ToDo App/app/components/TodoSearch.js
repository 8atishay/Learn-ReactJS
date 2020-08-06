var React = require('react');

class TodoSearch extends React.Component{

    handleSearch=()=>{
        var showCompleted = this.refs.showCompleted.checked;
        var searchText= this.refs.searchText.value;
        // debugger;
        // searchText = searchText.toLowerCase();

        this.props.onSearch(showCompleted,searchText);
    }
    render(){
        return(
            <div className='container__header'>
                <div>
                    <input type='search' ref='searchText' placeholder='Search Todos' onChange={this.handleSearch}/>
                </div>
                <div>
                    <input type='checkbox' ref = 'showCompleted' onChange={this.handleSearch}/>
                    Show Completed Todos
                </div>
            </div>
        )
    }
}
module.exports= TodoSearch;