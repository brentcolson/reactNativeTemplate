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
ListView Specific Styles
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
   }
});
