import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, View } from 'react-native';
import Login from './android/app/Screens/Login/Login'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar barStyle={'light-content'} />
      </View>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
)}



