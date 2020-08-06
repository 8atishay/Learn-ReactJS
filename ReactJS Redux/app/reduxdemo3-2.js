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

store.dispatch({
    type:'CHANGE_NAME',
    name:'ALAN 1'
})

var us = store.subscribe(()=>{
    var state = store.getState();
    console.log('Name is',state.name);
})

//dispaching action
store.dispatch({
    type:'CHANGE_NAME',
    name:'ALAN 2'
})

// unsubscribe should be kept at last
us();

store.dispatch({
    type:'CHANGE_NAME',
    name:'ALAN 3'
})
