const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initialvalue:', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated value:', store.getState())
})

store.dispatch(fetchUsers())

// const unsubscribe = store.subscribe(()=>{})
//cake dipatch below
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(2))
// // ice cream dipatch below
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe();