import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleWare = applyMiddleware(thunk)
const store = legacy_createStore(rootReducer, middleWare);

export default store;