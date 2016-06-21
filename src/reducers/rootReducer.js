//
// import searchReducer from './searchReducer';
//
// export {
//   counter
// };

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import search from './searchReducer.js';

/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  form: formReducer, // Reducer provided by 'redux-form' module
  search
});

export default rootReducer;
