import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {store} from './src/redux/store'
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center',
   alignItems:'center'
  },
});