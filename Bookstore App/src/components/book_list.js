import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";


import React, { Component } from 'react';

class BookList extends Component {
    renderList() {
        return this.props.bk.map(book => {
            return (
                <li key={book.title}
                    onClick={()=>this.props.sb(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul className='list-group col-sm-4'>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bk: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ sb: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);