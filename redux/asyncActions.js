const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESED = 'FETCH_USERS_SUCCESED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccessed = (users) => {
    return {
        type: FETCH_USERS_SUCCESED,
        payload: users
    }
}
const fetchUserFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((user) => user.username)
                dispatch(fetchUserSuccessed(users))
            })
            .catch((error) => {
                dispatch(fetchUserFailed(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// console.log('Initial:', store.getState());

store.subscribe(() =>
    console.log('User:', store.getState())
)

store.dispatch(fetchUsers())