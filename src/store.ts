import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



import taskReducer from './ducks/reducers/taskReducer'



const reducer = combineReducers({
    tasks: taskReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store