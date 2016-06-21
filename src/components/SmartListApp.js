//@flow

import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';
import { Provider } from 'react-redux';

//import containers
import Search from '../containers/Search.js'
import Lists from '../containers/Lists.js'

export default class SmartListApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { store } = this.props;
    return (
      <TabBarIOS selectedTab={state.selectedTab}>
        <TabBarIOS.Item
            selected={state.selectedTab === 'Search'}
            systemIcon="search"
            onPress={() => {
//CHANGE THIS TO DISPATCH
                this.setState({
                    selectedTab: 'Search'
                });
            }}>
            <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={state.selectedTab === 'Lists'}
          systemIcon="most-viewed"
          onPress={() => {
//CHANGE THIS TO DISPATCH
              this.setState({
                  selectedTab: 'Lists'
              });
          }}>
          <Lists/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
