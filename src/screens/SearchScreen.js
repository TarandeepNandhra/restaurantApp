import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '£' || '££' || '£££'
    return results.filter( result => {
      return result.price === price;
    })
  };

  return (
    <>
      <SearchBar 
        text={text} 
        onTextChange={ setText } 
        onTextSubmit={ () => searchApi(text) }
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList navigation={navigation} results={filterResultsByPrice('£')} title="Cost Effective" />
        <ResultsList navigation={navigation} results={filterResultsByPrice('££')} title="Bit Pricier" />
        <ResultsList navigation={navigation} results={filterResultsByPrice('£££')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default SearchScreen;