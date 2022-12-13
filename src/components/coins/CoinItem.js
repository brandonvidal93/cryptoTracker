import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CoinItem = ({item}) => {
  /* Destructuring the item object. */
  const {symbol, name} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{symbol}</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});

export default CoinItem;
