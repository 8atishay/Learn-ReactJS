var redux = require('redux');
var nextHobbyId = 1;
var defaultState = {
    name:'unknown',
    hobbies:[]
}

// store is passing action to reducer
var reducer = (state=defaultState, action) =>{
    //matches switch case
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                name:action.name
            }
        case 'ADD_HOBBY':
            return {
                hobbies:[
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            }
        default:
            return state;
    }
};

// action recieve by store
var store = redux.createStore(reducer);

var us = store.subscribe(()=>{
    var state = store.getState();
    console.log('Name is',state.name);
    console.log('Name is',store.getState());    
})

store.dispatch({
    type:'CHANGE_NAME',
    name:'ALAN 1'
})

//dispaching action
store.dispatch({
    type:'CHANGE_NAME',
    name:'ALAN 2'
})

// unsubscribe should be kept at last
// us();

store.dispatch({
    type:'ADD_HOBBY',
    name:'cricket'
})

store.dispatch({
    type:'ADD_HOBBY',
    name:'hockey'
})

store.dispatch({
    type:'ADD_HOBBY',
    name:'chess'
})
