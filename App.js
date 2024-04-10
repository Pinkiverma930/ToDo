import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/navigation/Router';
import Store from './src/redux/Store';
import { addItem } from './src/redux/action/addTodo';


export default function App() {

  useEffect(() => {
    (async () => {
      try {
        const values = await AsyncStorage.getItem("key");
        if (Array.isArray(JSON.parse(values))) {
          addItem(JSON.parse(values));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
   
    <Provider store={Store}>
    <Router/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


