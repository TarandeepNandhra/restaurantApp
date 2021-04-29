import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar 
        text={text} 
        onTextChange={ setText } 
        onTextSubmit={ () => searchApi(text) }
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default SearchScreen;