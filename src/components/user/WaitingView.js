import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const WaitingView = () => (
  <View style={styles.container}>
    <Text>Waiting</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackPearl,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WaitingView;
