import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppNavigatior } from './src/navigation/AppNavigator'


export default function App() {

  return (
    <View style={styles.container}>
      <AppNavigatior />
      <StatusBar style="auto" />
    </View>
  );
}
