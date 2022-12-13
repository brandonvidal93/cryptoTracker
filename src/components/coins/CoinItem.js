import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../res/colors';

const CoinItem = ({item}) => {
  /* Destructuring the item object. */
  const {symbol, name, percent_change_1h, price_usd} = item;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles['symbol-text']}>{symbol}</Text>
        <Text style={styles['name-text']}>{name}</Text>
        <Text style={styles['price-text']}>{`$ ${price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles['percent-text']}>{percent_change_1h}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ['symbol-text']: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
  },
  ['name-text']: {
    color: Colors.white,
    fontSize: 16,
    marginRight: 16,
  },
  ['percent-text']: {
    color: Colors.white,
    fontSize: 12,
  },
  ['price-text']: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default CoinItem;
