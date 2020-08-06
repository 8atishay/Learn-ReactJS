var redux = require('redux');

// store is passing action to reducer
var reducer = (state={name:'unknown'}, action) =>{
    //matches switch case
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                name:action.name
            }
        default:
            return state;
    }
};

// action recieve by store
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('State is',currentState);


//dispaching action
store.dispatch({
    type:'CHANGE_NAME',
    name:'ALAN'
})

console.log('Name should be ALAN',store.getState());