import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

const ProfileScreen = () => {
  const isFocused = useIsFocused();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isFocused ? (isDark ? '#333' : 'blue') : (isDark ? '#121212' : 'white') }]}>
      <Text style={[styles.text, { color: isDark ? '#fff' : 'black' }]}>Profile Screen</Text>
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
  },
});

export default ProfileScreen;
