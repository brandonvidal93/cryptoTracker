import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const UserScreen = props => {
  const handlePressPicture = () => {
    console.log('Take a picture');
    props.navigation.navigate('Picture');
  };

  const handlePressVideo = () => {
    console.log('Take a video');
    props.navigation.navigate('Video');
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePressPicture}>
        <Text style={styles.text}>Take a picture</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handlePressVideo}>
        <Text style={styles.text}>Take a video</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blackPearl,
    flex: 1,
  },
  button: {
    backgroundColor: Colors.picton,
    padding: 8,
    borderRadius: 8,
    margin: 16,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default UserScreen;
