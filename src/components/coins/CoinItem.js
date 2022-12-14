import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Colors from '../../res/colors';

const CoinItem = ({item, onPress}) => {
  /* Destructuring the item object. */
  const {symbol, name, percent_change_1h, price_usd} = item;

  /**
   * If the percent change in the last hour is greater than 0, return the image of an arrow pointing
   * up, otherwise return the image of an arrow pointing down
   * @returns The image of the arrow.
   */
  const getImgArrow = () => {
    if (percent_change_1h > 0) {
      return require('../../assets/images/arrow_up.png');
    } else {
      return require('../../assets/images/arrow_down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles['symbol-text']}>{symbol}</Text>
        <Text style={styles['name-text']}>{name}</Text>
        <Text style={styles['price-text']}>{`$ ${price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles['percent-text']}>{percent_change_1h}</Text>
        <Image style={styles.imageIcon} source={getImgArrow()} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
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
    marginRight: 8,
  },
  ['price-text']: {
    color: Colors.white,
    fontSize: 14,
  },
  imageIcon: {
    width: 22,
    height: 22,
  },
});

export default CoinItem;
