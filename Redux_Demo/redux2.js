const redux = require('redux')

//create action type 

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const SUPPLY_CAKE = 'SUPPLY_CAKE'
const SUPPLY_ICECREAM = 'SUPPLY_ICECREAM'

//create redux actions

const buyCake = ()=> {
   return {
    type: BUY_CAKE,
    payload: 1
   }
}

const buyIcecream = ()=> {
    return {
     type: BUY_ICECREAM,
     payload: 1
    }
 }

 const supplyCake = (qty)=> {
    return {
     type: SUPPLY_CAKE,
     payload: qty
    }
 }

 const supplyIcecream = (qty)=> {
    return {
     type: SUPPLY_ICECREAM,
     payload: qty
    }
 }

//create reducers... (prevState, action) => newState

CakeInitialState = {
    numberOfCake: 50
}

const cakeReducer =(state = CakeInitialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                numberOfCake: state.numberOfCake - 1
            }

        case SUPPLY_CAKE:
            return {
                numberOfCake: state.numberOfCake + action.payload
            }

        default: return state
    }
}


IcecreamInitialState = {
    numberOfIcecream: 100
}

const IcecreamReducer =(state = IcecreamInitialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                numberOfIcecream: state.numberOfIcecream - 1
            }

        case SUPPLY_ICECREAM:
            return {
                numberOfIcecream: state.numberOfIcecream + action.payload
            }

        default: return state
    }
}

//combine the reducers with redux dependecies

const combineReducer = redux.combineReducers

const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: IcecreamReducer
})


//create redux-store

const createStore = redux.createStore

const store = createStore(rootReducer)

console.log("initial State", store.getState())

const unsubscribe = store.subscribe(()=> console.log("CurrentState", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())

store.dispatch(supplyCake(5))
store.dispatch(supplyIcecream(25))


unsubscribe()




