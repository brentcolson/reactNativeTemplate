//@flow

import React from 'react';
import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({

/*********************************
TabBar and Nav Styles
*********************************/

    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
    },

/*********************************
ListView Styles
*********************************/

  rightContainer: {
      flex: 1
  },
  thumbnail: {
      width: 53,
      height: 81,
      marginRight: 10
  },
  listContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
  },
  listTitle: {
      fontSize: 20,
      marginBottom: 8
  },
  listAuthor: {
      color: '#656565'
  },
  separator: {
       height: 1,
       backgroundColor: '#dddddd'
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

/*********************************
ListView Styles
*********************************/

  detailContainer: {
    marginTop: 75,
    alignItems: 'center'
  },
  detailImage: {
    width: 107,
    height: 165,
    padding: 10
  },
  detailDescription: {
    padding: 10,
    fontSize: 15,
    color: '#656565'
  }

});
