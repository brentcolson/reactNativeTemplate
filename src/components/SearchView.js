import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

import styles from '../styles/styles.js'
import SearchResults from './searchResults.js'

export default class SearchView extends Component {
  constructor(props) {
    super(props);
      this.state = {
      itemAuthor: '',
      itemTitle: '',
      isLoading: false,
      errorMessage: ''
    };
  }

  itemTitleInput(event) {
    this.setState({ itemTitle: event.nativeEvent.text });
  }

  itemAuthorInput(event) {
    this.setState({ itemAuthor: event.nativeEvent.text });
  }

  searchItems() {
    this.fetchData();
  }

  fetchData() {

    this.setState({ isLoading: true });

    var baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    if (this.state.itemAuthor !== '') {
      baseURL += encodeURIComponent('inauthor:' + this.state.itemAuthor);
    }
    if (this.state.bookTitle !== '') {
      baseURL += (this.state.itemAuthor === '') ? encodeURIComponent('intitle:' + this.state.itemTitle) : encodeURIComponent('+intitle:' + this.state.itemTitle);
    }

    console.log('URL: >>> ' + baseURL);
    fetch(baseURL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ isLoading: false});
        if (responseData.items) {
          this.props.navigator.push({
            title: 'Item Results',
            component: SearchResults,
            passProps: {items: responseData.items}
          });
        } else {
          this.setState({ errorMessage: 'No results found'});
        }
      })
      .catch(error =>
        this.setState({
          isLoading: false,
          errorMessage: error
        }))
      .done();
  }


render() {
  var spinner = this.state.isLoading ?
    ( <ActivityIndicatorIOS
      hidden='true'
      size='large'/> ) :
    ( <View/> );
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchInstructions}>Search by book title and/or author</Text>
      <View>
        <Text style={styles.searchFieldLabel}>Book Title:</Text>
        <TextInput style={styles.searchInput} onChange={this.itemTitleInput.bind(this)}/>
      </View>
      <View>
        <Text style={styles.searchFieldLabel}>Author:</Text>
        <TextInput style={styles.searchInput} onChange={this.itemAuthorInput.bind(this)}/>
      </View>
      <TouchableHighlight
        style={styles.searchButton}
        underlayColor='#f1c40f'
        onPress={this.searchItems.bind(this)}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableHighlight>
      {spinner}
      <Text style={styles.searchErrorMessage}>{this.state.errorMessage}</Text>
    </View>
  );
}
}
