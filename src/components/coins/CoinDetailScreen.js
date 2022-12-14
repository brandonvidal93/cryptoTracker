import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, SectionList} from 'react-native';
import Colors from '../../res/colors';

export const CoinDetailScreen = props => {
  const [coinData, setCoinData] = useState({});

  const getSymbolIcon = nameid => {
    if (nameid) {
      return `https://c1.coinlore.com/img/25x25/${nameid}.png`;
    } else {
      return 'https://c1.coinlore.com/img/25x25/unknown.png';
    }
  };

  const getSections = coin => {
    const sections = [
      {
        title: 'Market Cap',
        data: [coinData.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coinData.volume24],
      },
      {
        title: 'Change 24h',
        data: [coinData.percent_change_24h],
      },
    ];

    return sections;
  };

  useEffect(() => {
    const {coin} = props.route.params;

    props.navigation.setOptions({title: coin.symbol});

    setCoinData(coin);
  }, [props.navigation, props.route.params]);

  return (
    <View style={styles.container}>
      <View style={styles['sub-header']}>
        <Image
          style={styles['symbol-coin']}
          source={{uri: getSymbolIcon(coinData.nameid)}}
        />
        <Text style={styles.title}>{coinData.name}</Text>
      </View>
      <SectionList
        sections={getSections(coinData)}
        keyExtractor={item => item}
        renderSectionHeader={({section}) => (
          <View style={styles['section-header']}>
            <Text style={styles['header-text']}>{section.title}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles['section-item']}>
            <Text style={styles['text-item']}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  ['sub-header']: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  ['symbol-coin']: {
    width: 25,
    height: 25,
  },
  ['section-header']: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },
  ['header-text']: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ['section-item']: {
    padding: 8,
  },
  ['text-item']: {
    color: Colors.white,
    fontSize: 14,
  },
});
