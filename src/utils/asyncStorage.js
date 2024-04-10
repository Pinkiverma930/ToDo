import AsyncStorage from "@react-native-async-storage/async-storage";


export const asyncSaveData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };



 export  const asyncgetData = async (key) => {
    try {
      const values = await AsyncStorage.getItem(key);
      return values;
      
    } catch (e) {
    console.log(e);
    }
  };

  export const asyncRemoveData = async (key, itemIdToRemove) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      let items = [];
      items = JSON.parse(jsonValue);
      const indexToRemove = items.findIndex((item) => item.id === itemIdToRemove);
      items.splice(indexToRemove, 1);
      await AsyncStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.error(error);
    }
  };
  