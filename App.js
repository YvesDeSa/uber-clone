import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import "react-native-gesture-handler";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store} >
      <StatusBar translucent />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              title: 'Overview'
            }}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown: false,
              title: 'Overview'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({

});
