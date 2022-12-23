import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors';
import FavoritesStack from './src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    /* A component that manages the navigation tree. */
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: Colors.blackPearl},
          headerShown: false,
          tabBarActiveBackgroundColor: Colors.blackPearl,
          tabBarInactiveTintColor: Colors.zircon,
          tabBarInactiveBackgroundColor: Colors.blackPearl,
        }}>
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                source={require('./src/assets/images/bank.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites Coins"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                source={require('./src/assets/images/star.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
