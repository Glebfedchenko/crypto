import reducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const enhancer = applyMiddleware(thunk)

const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;