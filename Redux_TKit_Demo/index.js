const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log("InitialState", store.getState())

const unsubscribe = store.subscribe(()=> console.log(store.getState()))

store.dispatch(cakeActions.buyCake())
store.dispatch(cakeActions.buyCake())
store.dispatch(cakeActions.buyCake())
store.dispatch(cakeActions.buyCake())
store.dispatch(cakeActions.buyCake())


store.dispatch(cakeActions.supplyCake(3))


store.dispatch(icecreamActions.buyIcecream())
store.dispatch(icecreamActions.buyIcecream())
store.dispatch(icecreamActions.buyIcecream())
store.dispatch(icecreamActions.buyIcecream())
store.dispatch(icecreamActions.buyIcecream())

store.dispatch(icecreamActions.supplyCake(7))


unsubscribe()