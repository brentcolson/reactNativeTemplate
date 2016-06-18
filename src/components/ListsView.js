//@flow

import React, { Component } from 'react';
import {

} from 'react-native';
import LineItem from './lineItem.js'

import styles from '../styles/styles.js'
import tempData from '../data/tempData.js'


export default class ListView extends Component {
  render() {
    return (
      <LineItem item={ tempData[0] } />
    );
  }
}
