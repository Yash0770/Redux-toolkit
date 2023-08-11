const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED'
const ICE_CREAM_RESTOCKED = 'ICE_CREAM_RESTOCKED'

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

const restokedCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

const orderIceCream = () => {
    return {
        type: ICE_CREAM_ORDERED,
        payload: 1,
    }
}

const restockedIceCream = (qty = 1) => {
    return {
        type: ICE_CREAM_RESTOCKED,
        payload: qty,
    }
}

// const initialState = {
//     numOfCake: 10,
//     numOfIceCream: 10,
// }

const initialCakeValue = {
    numOfCake: 10,
}

const initialIceCreamValue = {
    numOfIceCream: 10,
}

const cakeReducer = (state = initialCakeValue, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCake: state.numOfCake + action.payload,
            }
        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamValue, action) => {
    switch (action.type) {
        case ICE_CREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
            }
        case ICE_CREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload,
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() =>
    console.log('Update State', store.getState())
)

const actions = bindActionCreators({ orderCake, restokedCake, orderIceCream, restockedIceCream }, store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokedCake(10);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockedIceCream();

unsubscribe();