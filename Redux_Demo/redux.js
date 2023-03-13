const redux = require('redux')

//create action type

const BUY_CAKE = 'BUY_CAKE'
const SUPPLY_CAKE = 'SUPPLY_CAKE'
const SUPPLY_ICECREAM = 'SUPPLY_ICECREAM'
const BUY_ICECREAM = 'BUY_ICECREAM'

//create redux-action

const buyCake = () =>{
    return {
        type: BUY_CAKE,
        quantity: 1
    }
}

const buyIcecream = () =>{
    return {
        type: BUY_ICECREAM,
        quantity: 1
    }
}

const supplyCake = (qty) =>{
    return {
        type: SUPPLY_CAKE,
        quantity: qty
    }
}

const supplyIcecream = (qty) =>{
    return {
        type: SUPPLY_ICECREAM,
        quantity: qty
    }
}

//create reducer... (previousState, action) => newState

intialState = {
    numberOfCakes: 86,
    numberOfIceream: 100
}

const reducer =(state = intialState, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
            default: return state
        
        case SUPPLY_CAKE: 
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.quantity
            }
        
        case SUPPLY_ICECREAM: 
            return {
                ...state,
                numberOfIceream: state.numberOfIceream + action.quantity
            }

        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceream: state.numberOfIceream - 1
            }

    }
}

//create store

const createStore = redux.createStore

const store = createStore(reducer)

console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(()=>console.log("Current State", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(supplyCake(20))
store.dispatch(supplyIcecream(30))
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()