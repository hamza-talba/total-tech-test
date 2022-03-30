/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
  
import UsersListScreen from './screens/UsersListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" options={{ title: 'Home' }} component={UsersListScreen} />
          <Stack.Screen name="Details"  options={{ title: 'User Details' }} component={UserDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
   );
};
  
export default App;
