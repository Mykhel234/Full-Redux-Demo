const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


//create action types

const USERS_REQUESTED = 'USERS_REQUESTED'
const USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS'
const USERS_REQUEST_FAILED = 'USERS_REQUEST_FAILED'

//create redux-actions

const requestUsers = () => {
    return {
        type: USERS_REQUESTED
    }
}

const fetchUserSuccess = (users)=> {
    return {
        type: USERS_REQUEST_SUCCESS,
        payload: users
    }
}

const fetchUserFailed = (error)=> {
    return {
        type: USERS_REQUEST_FAILED,
        payload: error
    }
}

//create reducers

initialState = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_REQUESTED:
            return {
                loading: true,
                data: [],
                error: ''
            }
        case USERS_REQUEST_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case USERS_REQUEST_FAILED:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: {
            return state
        }
    }
}


const fetchUsers =()=> {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=> {
                const users = response.data.map((user)=> user.email)
                dispatch(fetchUserSuccess(users))
            })
    }
}

// create redux_ Store

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchUsers())