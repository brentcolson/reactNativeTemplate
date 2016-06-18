//@flow

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import SearchView from '../components/SearchView.js'

import styles from '../styles/styles.js'


export default class Add extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Add to a List',
            component: SearchView
            }}/>
        );
    }
}
