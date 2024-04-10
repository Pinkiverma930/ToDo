import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import{View,FlatList,Text,Button,TouchableOpacity} from 'react-native'
import AddData from '../Screens/AddData';
import ShowData from '../Screens/ShowData';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="AddData" component={AddData} />
      <Stack.Screen name="ShowData" component={ShowData}  options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

