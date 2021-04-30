import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    // Don't show anything -> if empty does not show category.
    return null;
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id }
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  }
});

export default withNavigation(ResultsList);