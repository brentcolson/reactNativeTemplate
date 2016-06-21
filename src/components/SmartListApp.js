//@flow

import React, { Component } from 'react';
import {
  View,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';
import LineItem from './lineItem.js';
import ItemDetail from './itemDetail.js'

import styles from '../styles/styles.js'

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

export default class ListsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
       isLoading: true,
       dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2
       })
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.items),
            isLoading: false
        });
      })
      .done();

   }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS
            size='large'/>
        <Text>
          Loading items...
        </Text>
      </View>
    );
  }

  renderItem(item) {
    if(this.state.isLoading) {
      return this.renderLoadingView
    }
    return (
      <TouchableHighlight onPress={() => this.showItemDetail(item)}  underlayColor='#dddddd'>
        <View>
          <LineItem item={ item } />
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
    }

    showItemDetail(item) {
      this.props.navigator.push({
        title: item.volumeInfo.title,
        component: ItemDetail,
        passProps: {item}
      });
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
