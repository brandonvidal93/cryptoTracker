import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Http from '../../libs/http';

export const CoinsScreen = props => {
  /* This is a React Hook that is used to create a state variable. */
  const [coins, setCoins] = useState([]);

  const urlAPI = 'https://api.coinlore.net/api/tickers/';

  /**
   * When the user presses the button, the console will log the props, and then the user will be
   * navigated to the Coin Detail screen
   */

  const callAPI = async () => {
    /* Calling the API and waiting for the response. */
    const coinsResponse = await Http.instance.get(urlAPI);

    /* Setting the state variable `coins` to the response of the API. */
    setCoins(coinsResponse.data);
  };

  /* This is a React Hook that is used to run a function when the component is mounted. */
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coins Screen</Text>

      <FlatList
        data={coins}
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
        style={styles.list}
      />
    </View>
  );
};

/* Creating a stylesheet that will be used to style the components in the screen. */
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
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
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
});
