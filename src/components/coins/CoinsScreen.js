import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Http from '../../libs/http';
import CoinItem from './CoinItem';
import CoinSearch from './CoinSearch';
import Colors from '../../res/colors';

export const CoinsScreen = props => {
  /* This is a React Hook that is used to create a state variable. */
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlAPI = 'https://api.coinlore.net/api/tickers/';

  /**
   * "Call the API and set the state variables `coins` and `loading`."
   *
   * The function is `async` because it uses the `await` keyword. The `await` keyword is used to wait
   * for a promise to resolve
   */
  const callAPI = async () => {
    /* Setting the state variable `loading` to `true`. */
    setLoading(true);

    /* Calling the API and waiting for the response. */
    const coinsResponse = await Http.instance.get(urlAPI);

    /* Setting the state variable `coins` to the response of the API. */
    setCoins(coinsResponse.data);
    setAllCoins(coinsResponse.data);

    /* Setting the state variable `loading` to `false`. */
    setLoading(false);
  };

  /**
   * When the user presses a coin, navigate to the Coin Detail screen and pass the coin as a parameter
   */
  const handlePress = coin => {
    props.navigation.navigate('Coin Detail', {coin});
  };

  /**
   * It takes a query as an argument, filters the allCoins array to only include coins whose name or
   * symbol includes the query, and then sets the coins state to the filtered array
   */
  const handleSearch = query => {
    const coinsFiltered = allCoins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    setCoins(coinsFiltered);
  };

  /* This is a React Hook that is used to run a function when the component is mounted. */
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <View style={styles.container}>
      <CoinSearch onChange={handleSearch} style={styles['input-search']} />

      {/* Rendering an ActivityIndicator component if the state variable `loading` is `true`. */}
      {loading ? (
        <ActivityIndicator
          color={Colors.white}
          size="large"
          style={styles.loading}
        />
      ) : null}

      {/* Rendering a list of items. */}
      <FlatList
        data={coins}
        renderItem={({item}) => (
          <CoinItem item={item} onPress={() => handlePress(item)} />
        )}
        style={styles.list}
      />
    </View>
  );
};

/* Creating a stylesheet that will be used to style the components in the screen. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackPearl,
  },
  title: {
    color: Colors.zircon,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  ['button-primary']: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
  },
  ['button-text']: {
    color: '#fff',
    textAlign: 'center',
  },
  list: {
    width: '100%',
  },
  loading: {
    flex: 1,
  },
  ['input-search']: {
    width: '100%',
  },
});
