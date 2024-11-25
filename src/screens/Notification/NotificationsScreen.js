import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

const notifications = [
  { id: 1, title: 'Novo serviço disponível!', description: 'Confira o novo serviço de cabelo no salão Beleza Total.', date: '2024-11-21' },
  { id: 2, title: 'Promoção exclusiva', description: 'Ganhe 10% de desconto em todos os serviços do salão Estilo & Charme.', date: '2024-11-19' },
  { id: 3, title: 'Agendamento confirmado', description: 'Seu agendamento no salão Elegância Pura foi confirmado para amanhã às 14h.', date: '2024-11-18' },
  { id: 4, title: 'Novo produto no Spa', description: 'O Spa agora tem novos produtos de cuidados para a pele. Visite-nos para mais informações.', date: '2024-11-16' },
];

const NotificationsScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-background-image.jpg' }}
      style={[styles.container, { backgroundColor: isDark ? '#121212' : '#f5f5f5' }]}
      imageStyle={[styles.backgroundImage, { opacity: isFocused ? 0.4 : 0.7 }]}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="heart" size={24} color={isDark ? '#e9a0b8' : '#4B4F56'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="calendar" size={24} color={isDark ? '#e9a0b8' : '#4B4F56'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="history" size={24} color={isDark ? '#e9a0b8' : '#4B4F56'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="user" size={24} color={isDark ? '#e9a0b8' : '#4B4F56'} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.pageTitle, { color: isDark ? '#fff' : '#4B4F56' }]}>Notificações</Text>

        <ScrollView style={styles.notificationList}>
          {notifications.map((notification) => (
            <View key={notification.id} style={[styles.notificationCard, { backgroundColor: isDark ? '#333' : 'rgba(255, 255, 255, 0.8)' }]}>
              <Text style={[styles.notificationTitle, { color: isDark ? '#fff' : '#333' }]}>{notification.title}</Text>
              <Text style={[styles.notificationDescription, { color: isDark ? '#bbb' : '#4B4F56' }]}>{notification.description}</Text>
              <Text style={[styles.notificationDate, { color: isDark ? '#999' : '#9b9b9b' }]}>{notification.date}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  backgroundImage: { flex: 1 },
  contentContainer: { paddingBottom: 20 },
  iconRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  icon: { padding: 10 },
  pageTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  notificationList: { paddingVertical: 10 },
  notificationCard: {
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 12,
  },
});

export default NotificationsScreen;
