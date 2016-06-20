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
List View Styles
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
Item Detail Styles
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
    },

/*********************************
Search View Styles
*********************************/

  searchContainer: {
    marginTop: 65,
    padding: 10
  },
  searchInput: {
    height: 36,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    flex: 1,
    borderRadius: 4,
    padding: 5
  },
  searchButton: {
    height: 36,
    backgroundColor: '#f39c12',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15
  },
  searchButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  searchInstructions: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15
  },
  searchFieldLabel: {
    fontSize: 15,
    marginTop: 15
  },
  searchErrorMessage: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 15,
    color: 'red'
  }
})
