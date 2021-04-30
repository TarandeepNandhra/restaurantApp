import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( { text, onTextChange, onTextSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search" 
        value={text}
        onChangeText={ onTextChange }
        onEndEditing={ onTextSubmit }
      />
    </View>
  );
};

const styles = StyleSheet.create({

  backgroundStyle: {
    backgroundColor: '#E5E5E5',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },

  inputStyle: {
    flex: 1,
    fontSize: 20,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }

});

export default SearchBar;