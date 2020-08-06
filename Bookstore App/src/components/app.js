import React from 'react';
import BookList from './book_list';
import BookDetails from './book_details';


class App extends React.Component{
    render(){
        return(
            <div>
                <p>React Application Begins</p>
                <BookList/>
                <BookDetails/>
            </div>
        )
    }
}
export default App;