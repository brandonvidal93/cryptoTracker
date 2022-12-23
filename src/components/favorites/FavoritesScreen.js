import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../res/colors';
import FavoritesEmptyState from './FavoritesEmptyState';

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
});
