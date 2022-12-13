import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CoinDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coin Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
