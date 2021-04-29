import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
          horizontal
          data={results}
          keyExtractor={(result) => result.id }
          renderItem={({ item }) => {
            return <Text>{item.name}</Text>
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ResultsList;