import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CoinsScreen} from './CoinsScreen';
import {CoinDetailScreen} from './CoinDetailScreen';

/* Creating a stack navigator. */
const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      {/* The name of the screen is Coins, and the component is CoinsScreen */}
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="Coin Detail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
