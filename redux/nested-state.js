const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const initialState = {
    name: 'Yash',
    address: {
        street: '1',
        city: 'jodhpur',
        state: 'Rajasthan'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         state: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state;
    }
}

const store = createStore(reducer)
console.log("Initial address:", store.getState());

const unsubscribe = store.subscribe(() =>
    console.log('Updated address:', store.getState())
)
// const action = bindActionCreators({street}, store.dispatch)
// action.street();

store.dispatch(updateStreet('updated'))
unsubscribe();