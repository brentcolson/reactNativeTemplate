/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';

import Root from ./containers/Root.js
//import containers
import Search from './src/containers/Search.js'
import Lists from './src/containers/Lists.js'

class smartList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'Search'
      };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
            selected={this.state.selectedTab === 'Search'}
            systemIcon="search"
            onPress={() => {
                this.setState({
                    selectedTab: 'Search'
                });
            }}>
            <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Lists'}
          systemIcon="most-viewed"
          onPress={() => {
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

AppRegistry.registerComponent('smartList', () => smartList);
