const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 10,
}

const iceCreamSlice = createSlice({
    name: 'Ice Cream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        },
        extraReducers: {
            ['Cake/ordered']: (state) => {
                state.numOfIceCream--
            },
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions