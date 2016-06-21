import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import SmartListApp from '../components/SmartListApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const mapDispatchToProps = (dispatch) => {
  return {
    attemptVerify: () => {
      console.log('work');
      let token = window.localStorage.getItem('jwtToken');

      // If there is no token, do nothing
      if(!token || token === '') {
        return;
      }
      dispatch(actions.attemptVerify(token));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    token: state.auth.token
  };
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <SmartListApp />
      </Provider>
    );
  }
}
