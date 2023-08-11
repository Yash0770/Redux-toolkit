const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}
// https://jsonplaceholder.typicode.com/users

const fetchUsers = createAsyncThunk(('user/fetchUsers', () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {
        response.data.map((user)=> user.id)
    })
}))

// Generates pending, fullfiled, and rejected action types 
const newUserSlice = createSlice({
    name: 'newUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = true
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = true
            state.users = []
            state.error = action.payload
        })
    }
})

module.exports = newUserSlice.reducer
module.exports.fetchUsers = fetchUsers.a