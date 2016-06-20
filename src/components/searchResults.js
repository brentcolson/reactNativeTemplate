import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ListView
} from 'react-native';

import ItemDetail from "./itemDetail.js";
import styles from '../styles/styles.js'

export default class SearchResults extends Component {
      constructor(props) {
          super(props);

          var dataSource = new ListView.DataSource(
              {rowHasChanged: (row1, row2) => row1 !== row2});
          this.state = {
              dataSource: dataSource.cloneWithRows(this.props.items)
          };
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

      renderItem(item) {
          var imageURI = (typeof item.volumeInfo.imageLinks !== 'undefined') ? item.volumeInfo.imageLinks.thumbnail : '';

          return (
              <TouchableHighlight onPress={() => this.showItemDetail(item)}
                                  underlayColor='#dddddd'>
                  <View>
                      <View style={styles.listContainer}>
                          <Image
                              source={{uri: imageURI}}
                              style={styles.thumbnail} />
                          <View style={styles.rightContainer}>
                              <Text style={styles.listTitle}>{item.volumeInfo.title}</Text>
                              <Text style={styles.listAuthor}>{item.volumeInfo.authors}</Text>
                          </View>
                      </View>
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

}
