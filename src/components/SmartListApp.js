//@flow

import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';

//import containers
import Search from '../containers/Search.js'
import Lists from '../containers/Lists.js'

export default class SmartListApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { selected, updateSelected } = this.props
    return (
      <TabBarIOS selectedTab={selected}>
        <TabBarIOS.Item
            selected={selected === 'Search'}
            systemIcon="search"
            onPress={() => {
//CHANGE THIS TO DISPATCH ACTION TO SET GLOBAL STATE
                updateSelected('Search');
            }}>
            <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={selected === 'Lists'}
          systemIcon="most-viewed"
          onPress={() => {
//CHANGE THIS TO DISPATCH
            updateSelected('Lists');
          }}>
          <Lists/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
