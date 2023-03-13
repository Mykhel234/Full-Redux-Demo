const redux = require('redux')

//create action type

const STREET_UPDATED = 'STREET_UPDATED'

//create redux-actions

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

//create reducer (previousState, action) => newState

const intialState = {
    name: 'Michael',
    address: {
        street: '28 Mokoya Street, Olodi Apapa',
        city: 'Lagos',
        state: 'Lagos State'
    }
}

const reducer = (state = intialState, action) =>{
    switch(action.type){
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
            default: {
                return state
            }
    }
}

//create store

const createStore = redux.createStore
const store = createStore(reducer)

console.log('initial State', store.getState())

const unsubscribe = store.subscribe(()=>console.log('current state', store.getState()))

store.dispatch(updateStreet('108 Mokoya Street, Olodi Apapa'))

unsubscribe()