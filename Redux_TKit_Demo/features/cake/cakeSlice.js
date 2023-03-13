const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes: 20
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducer: {
        buyCake: (state)=> {
            state.numberOfCakes--
        },
        supplyCake: (state, action)=> {
            state.numberOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions