import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Colors from '../../res/colors';
import FavoritesEmptyState from './FavoritesEmptyState';
import CoinItem from '../coins/CoinItem';
import Storage from '../../libs/storage';

export const FavoritesScreen = props => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const getAllKeys = await Storage.instance.getAllKeys();

      console.log('getAllKeys', getAllKeys);

      const keys = getAllKeys.filter(key => key.includes('favorite-'));

      const favs = await Storage.instance.multiGet(keys);

      const favsInfo = favs.map(fav => JSON.parse(fav[1]));

      setFavorites(favsInfo);
    } catch (error) {
      console.log('getFavorites err', error);
    }
  };

  const handlePress = coin => {
    props.navigation.navigate('Coin Detail', {coin});
  };

  useEffect(() => {
    const unsuscribe = props.navigation.addListener('focus', () => {
      getFavorites();
    });

    return unsuscribe;
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <FavoritesEmptyState />
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <CoinItem item={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
});
