// ExploreScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';  // Hook para verificar se a tela está ativa

const ExploreScreen = () => {
  const isFocused = useIsFocused();

  return (
    <View style={[styles.container, { backgroundColor: isFocused ? 'blue' : 'white' }]}>
      <Text style={styles.text}>Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default ExploreScreen;
