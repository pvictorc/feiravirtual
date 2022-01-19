import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Routes from './src/routes/router';
import { Provider } from 'react-redux';
import store from './store';




export default function App() {

  // retornar rotas
  return (
    <>
        <StatusBar style="light" backgroundColor="#000" translucent={false}/> 
        <Provider store={store}>
        <NavigationContainer> 
        <Routes />
        </NavigationContainer> 
        </Provider>
    </>
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