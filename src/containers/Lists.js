//@flow

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import ListsView from '../components/ListsView.js'

import styles from '../styles/styles.js'


export default class Add extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Your Lists',
            component: ListsView
            }}/>
        );
    }
}
