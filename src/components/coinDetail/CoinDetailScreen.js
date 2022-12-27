import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  // FlatList,
  Pressable,
  Alert,
} from 'react-native';
// import Http from '../../libs/http';
import Storage from '../../libs/storage';
import Colors from '../../res/colors';
// import CoinMarketItem from './CoinMarketItem';

export const CoinDetailScreen = props => {
  const [coinData, setCoinData] = useState({});
  // const [markets, setMarkets] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  /**
   * If the nameid is true, return the image url with the nameid, otherwise return the image url with
   * the word 'unknown'
   * @returns the image url for the coin.
   */
  const getSymbolIcon = nameid => {
    if (nameid) {
      return `https://c1.coinlore.com/img/25x25/${nameid}.png`;
    } else {
      return 'https://c1.coinlore.com/img/25x25/unknown.png';
    }
  };

  /**
   * It takes a coin object and returns an array of objects that contain the title and data for each
   * section
   * @returns An array of objects.
   */
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

  /**
   * It takes a coinId as an argument, makes a request to the Coinlore API, and sets the markets data
   * to the state
   */
  // const getMarkets = async coinId => {
  //   const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;

  //   const marketsData = await Http.instance.get(url);

  //   setMarkets(marketsData);
  // };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const addFavorite = async () => {
    const coin = JSON.stringify(coinData);

    const key = `favorite-${coinData.id}`;

    const stored = await Storage.instance.store(key, coin);

    if (stored) {
      setIsFavorite(true);
    } else {
      console.log('Something went wrong');
    }
  };

  const removeFavorite = async () => {
    Alert.alert('Remove favorite', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: async () => {
          const key = `favorite-${coinData.id}`;

          await Storage.instance.remove(key);

          setIsFavorite(false);
        },
        style: 'destructive',
      },
    ]);
  };

  const getFavorite = useCallback(async () => {
    try {
      const key = `favorite-${coinData.id}`;

      const favStr = await Storage.instance.get(key);

      if (favStr !== null) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.log('Get favorite error', error);
    }
  }, [coinData]);

  /* A hook that is called when the component is mounted. It is used to set the title of the screen and
  the coin data. */
  useEffect(() => {
    const {coin} = props.route.params;

    props.navigation.setOptions({title: coin.symbol});

    setCoinData(coin);

    // getMarkets(coin.id);

    getFavorite(coin);
  }, [getFavorite, props.navigation, props.route.params]);

  return (
    <View style={styles.container}>
      <View style={styles['sub-header']}>
        <View style={styles.row}>
          <Image
            style={styles['symbol-coin']}
            source={{uri: getSymbolIcon(coinData.nameid)}}
          />
          <Text style={styles.title}>{coinData.name}</Text>
        </View>

        <Pressable
          testID="btn-favorite"
          onPress={toggleFavorite}
          style={[
            styles['btn-favorite'],
            !isFavorite
              ? styles['btn-favorite-add']
              : styles['btn-favorite-remove'],
          ]}>
          <Text style={styles['btn-favorite-text']}>
            {!isFavorite ? 'Add favorite' : 'Remove favorite'}
          </Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.section}
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

      {/* <Text style={styles['title-markets']}>Markets</Text> */}

      {/* <FlatList
        horizontal={true}
        data={markets}
        renderItem={({item}) => <CoinMarketItem item={item} />}
        keyExtractor={item => `${item.base}-${item.name}-${item.quote}`}
        style={styles.list}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  row: {
    flexDirection: 'row',
  },
  ['sub-header']: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  section: {
    maxHeight: 220,
    marginBottom: 16,
  },
  ['section-header']: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  ['header-text']: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ['section-item']: {
    padding: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
  ['text-item']: {
    color: Colors.white,
    fontSize: 14,
  },
  list: {
    maxHeight: 120,
    paddingLeft: 16,
  },
  ['title-markets']: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 16,
  },
  ['btn-favorite']: {
    padding: 8,
    borderRadius: 8,
  },
  ['btn-favorite-add']: {
    backgroundColor: Colors.picton,
  },
  ['btn-favorite-remove']: {
    backgroundColor: Colors.carmine,
  },
  ['btn-favorite-text']: {
    color: Colors.white,
  },
});
