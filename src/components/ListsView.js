//@flow

import React, { Component } from 'react';
import {
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import LineItem from './lineItem.js'

import styles from '../styles/styles.js'
import tempData from '../data/tempData.js'


export default class ListsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
       dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2
       })
    };
  }
  componentDidMount() {
    var books = tempData;
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(books)
    });
   }

  renderItem(item) {
    return (
      <TouchableHighlight>
        <View>
          <LineItem item={ item } />
        </View>
      </TouchableHighlight>
    );
    }

   render() {
     return (
       <ListView
           dataSource={this.state.dataSource}
           renderRow={this.renderItem.bind(this)}
           style={styles.listView}
         />
     );
   }
}
