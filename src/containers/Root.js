import React, { Component } from 'react';
import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer.js';
import SmartListApp from '../containers/SmartListAppContainer';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer);
import configureStore from '../store/configureStore.js'

const store = configureStore();

// const mapDispatchToProps = (dispatch) => {
//   return {
//     attemptVerify: () => {
//       console.log('work');
//       let token = window.localStorage.getItem('jwtToken');
//
//       // If there is no token, do nothing
//       if(!token || token === '') {
//         return;
//       }
//       dispatch(actions.attemptVerify(token));
//     }
//   };
// };
//
// function mapStateToProps(state, ownProps) {
//   return {
//     user: state.user,
//     token: state.auth.token
//   };
// }

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <SmartListApp />
      </Provider>
    );
  }
}
