const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const initialValue = {
    name: 'demo1'
}

const NAME = 'NAME';

const updateName = (name)=>{
    return {
        type: NAME,
        payload: name,
    }
}

const reducer = (state = initialValue, action)=>{
    switch (action.type) {
        case NAME:
            return {
                ...state,
                name: action.payload
            }
    
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log('InitialName: ', store.getState());

const unsubscribe = store.subscribe(()=>
console.log('UpdatedName: ', store.getState())
)
store.dispatch(updateName('newName'))
// action.updateName()
unsubscribe()