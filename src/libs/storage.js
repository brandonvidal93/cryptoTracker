import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  /* Creating a new instance of the Storage class. */
  static instance = new Storage();

  /* Storing a key-value pair in the AsyncStorage. */
  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      return true;
    } catch (err) {
      console.log('Storage store error', err);

      return false;
    }
  };

  /* A function that is getting the value of the key from the AsyncStorage. */
  get = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log('Storage get error', err);

      throw Error(err);
    }
  };

  /* Getting all the keys from the AsyncStorage. */
  multiGet = async keys => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (err) {
      console.log('Storage getAll error', err);

      throw Error(err);
    }
  };

  /* Getting all the keys from the AsyncStorage. */
  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (err) {
      console.log('Storage getAllKeys error', err);

      throw Error(err);
    }
  };

  /* A function that is removing the key-value pair from the AsyncStorage. */
  remove = async key => {
    try {
      await AsyncStorage.removeItem(key);

      return true;
    } catch (err) {
      console.log('Storage remove error', err);

      return false;
    }
  };
}

export default Storage;
