// NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';  // Hook para verificar se a tela está ativa

const NotificationsScreen = () => {
  const isFocused = useIsFocused();

  return (
    <View style={[styles.container, { backgroundColor: isFocused ? '#6F4F37' : '#6F4F37' }]}>
      <Text style={styles.text}>Notifications Screen</Text>
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
    color: '#6F4F37',
  },
});

export default NotificationsScreen;
