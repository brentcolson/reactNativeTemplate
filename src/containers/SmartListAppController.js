
import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import { Provider } from 'react-redux';
import SmartListApp from '.../components/SmartListApp.js'

// @connect(state => ({
//   state: state.counter
// }))

const mapDispatchToProps = (dispatch) => {
  return {
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    selectedTab: state.selectedTab
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartListApp);
