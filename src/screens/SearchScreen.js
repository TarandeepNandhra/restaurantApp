import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        // adds params on as a query, as docs has requested
        limit: 50,
        term: text,
        location: 'London'
      }
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar 
        text={text} 
        onTextChange={ setText } 
        onTextSubmit={ searchApi }
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default SearchScreen;