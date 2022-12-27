import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import UserStack from './src/components/user/UserStack';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://1376efd079f34f649c71a402081f7d25@o4504397112147968.ingest.sentry.io/4504397113196544',
  maxBreadcrumbs: 150,
  debug: false, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.

  // Release Health
  enableAutoSessionTracking: true,
  autoSessionTrackingIntervalMillis: 5000,

  // Offline caching
  enableNative: false,

  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
      // ... other options
    }),
  ],

  tracesSampleRate: 1.0,
});

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
          testID="tab-coins"
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
          testID="tab-favorites"
          name="Favorites"
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
        {/* <Tabs.Screen
          name="User"
          component={UserStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                source={require('./src/assets/images/user.png')}
                style={{tintColor: color, width: size, height: size}}
              />
            ),
          }}
        /> */}
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Sentry.wrap(App);
