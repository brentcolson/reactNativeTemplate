//@flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles.js'

export default class itemDetail extends Component {
  constructor(props){
    super(props);
  };

  render() {
    var item = this.props.item;
    var imageURI = (typeof item.volumeInfo.imageLinks !== 'undefined') ? item.volumeInfo.imageLinks.thumbnail : '';
    var description = (typeof item.volumeInfo.description !== 'undefined') ? item.volumeInfo.description : '';
    return (
       <View style={styles.detailContainer}>
           <Image style={styles.detailImage} source={{uri: imageURI}} />
           <Text style={styles.detailDescription}>{description}</Text>
       </View>
    );
  }
}
