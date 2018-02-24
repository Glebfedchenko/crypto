import { combineReducers } from 'redux'
import coinReducer from './coinReducer'
const reducer = combineReducers({
    coins: coinReducer
})

export default reducer