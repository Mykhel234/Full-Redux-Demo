const createSlice = require("@reduxjs/toolkit").createSlice

initialState = {
    numberOfIcecream: 48
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducer: {
        buyIcecream: (state)=> {
            state.numberOfIcecream--
        },
        supplyIcecream: (state, action)=> {
            state.numberOfIcecream += action.payload
        }
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions