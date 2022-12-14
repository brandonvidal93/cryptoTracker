import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import Colors from '../../res/colors';

const CoinSearch = props => {
  const [query, setQuery] = useState('');

  /**
   * It takes a queryParam as an argument, sets the query state to the queryParam, and if there is an
   * onChange prop, it calls the onChange prop with the queryParam
   */
  const handleText = queryParam => {
    setQuery(queryParam);

    if (props.onChange) {
      props.onChange(queryParam);
    }
  };

  return (
    <View>
      <TextInput
        style={[
          styles['text-input'],
          Platform.OS === 'ios'
            ? styles['text-input-ios']
            : styles['text-input-android'],
        ]}
        placeholder="Search coin"
        placeholderTextColor="#fff"
        onChangeText={handleText}
        value={query}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ['text-input']: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: '#fff',
  },
  ['text-input-android']: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  ['text-input-ios']: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinSearch;
