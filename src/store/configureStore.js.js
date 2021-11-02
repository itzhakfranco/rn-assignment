import {createStore, applyMiddleware, combineReducers} from 'redux';
import formReducer from './form/formReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({formReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
