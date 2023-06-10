import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './rootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;