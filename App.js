import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.RectangleShapeView}>
        <Text>Feira Virtual</Text>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  RectangleShapeView: {
    marginTop: 20,
    width: '80%',
    height: 120,
    backgroundColor: '#FFC107',
    alignItems: 'center',
    textAlignVertical: 'center'
  }
});