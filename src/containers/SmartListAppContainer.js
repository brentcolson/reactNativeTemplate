
import React, { Component } from 'react-native';
import * as actions from '../actions/index.js';
import SmartListApp from '../components/SmartListApp.js'
import { connect } from 'react-redux';


// @connect(state => ({
//   state: state.counter
// }))

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(actions.increment());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    selectedTab: "add",
    count: 0
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartListApp);
