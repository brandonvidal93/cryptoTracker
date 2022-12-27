import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import WaitingView from './WaitingView';
import Colors from '../../res/colors';

const PictureScreen = () => {
  const [pausePreview, setPausePreview] = useState(false);

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);

    const source = data.uri;

    if (source) {
      await camera.pausePreview();
      console.log('picture source', source);
      setPausePreview(true);
    }
  };

  const resumePicture = async function (camera) {
    await camera.resumePreview();
    setPausePreview(false);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        // permisos para ios
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        // permisos para android
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      {({camera, status, recordAudioPermissionStatus}) => {
        if (status !== 'READY') {
          return <WaitingView />;
        }
        return (
          <View
            style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            {pausePreview ? (
              <TouchableOpacity
                onPress={() => resumePicture(camera)}
                style={styles.button}>
                <Text> Resume </Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={styles.button}>
              <Text> Take Picture </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.blackPearl,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    flex: 0,
    backgroundColor: Colors.picton,
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default PictureScreen;
