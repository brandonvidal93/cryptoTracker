import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const CoinDetailScreen = ({item}) => {
  const {name, price_usd} = item;

  return (
    <View style={styles.container}>
      <Text style={styles['text-name']}>{name}</Text>
      <Text style={styles['text-price']}>Price</Text>
      <Text style={styles['text-price']}>$ {price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: Colors.zircon,
    borderWidth: 1,
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  ['text-name']: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ['text-price']: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default CoinDetailScreen;
