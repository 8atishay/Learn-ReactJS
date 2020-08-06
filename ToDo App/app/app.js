var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

require('./assets/css/foundation.css');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);