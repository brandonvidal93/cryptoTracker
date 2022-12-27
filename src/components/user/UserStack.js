import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from './UserScreen';
import PictureScreen from './PictureScreen';
import VideoScreen from './VideoScreen';

import Colors from '../../res/colors';

const Stack = createStackNavigator();

const UserStack = () => {
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
      <Stack.Screen name="User Profile" component={UserScreen} />
      <Stack.Screen name="Picture" component={PictureScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;
