import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
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
              <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
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

export default ResultsList;