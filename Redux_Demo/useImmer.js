//Immer is used to avoid complications in nested state

const redux = require('redux')
const produce = require('immer').produce

//create action type

const UPDATE_TITLE = 'UPDATE_TITLE'

//create redux-action

const updateTitle = (title)=> {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

//create reducer... (prevState, action) => newState

initialState = {
    author: 'Johnson',
    location: 'Lagos',
    blog: {
        title: 'Motivating Lives',
        contents: 'Lorem ipsum are dummy datas use in place of real text. they can be updated when the lines have been scripted'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_TITLE:
            // return {
            //     ...state,
            //     blog: {
            //         ...state.blog,
            //         title: action.payload
            //     }
            // }

            return produce(state, (draft)=>{
                draft.blog.title = action.payload
            })
            default: {
                return state
            }
    }
}

//create store 

const createStore = redux.createStore

const store = createStore(reducer)

console.log('Intial State', store.getState())

const unsubscribe = store.subscribe(()=> console.log("Current State", store.getState()))

store.dispatch(updateTitle("Inspiring Others"))

unsubscribe()