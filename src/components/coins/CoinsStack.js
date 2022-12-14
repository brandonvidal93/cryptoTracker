import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CoinsScreen} from './CoinsScreen';
import {CoinDetailScreen} from '../coinDetail/CoinDetailScreen';
import Colors from '../../res/colors';

/* Creating a stack navigator. */
const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: 0,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}>
      {/* The name of the screen is Coins, and the component is CoinsScreen */}
      <Stack.Screen name="Crypto Coins" component={CoinsScreen} />
      <Stack.Screen name="Coin Detail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
