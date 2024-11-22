import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useIsFocused } from '@react-navigation/native';

// Dados de notificações
const notifications = [
  { id: 1, title: 'Novo serviço disponível!', description: 'Confira o novo serviço de cabelo no salão Beleza Total.', date: '2024-11-21' },
  { id: 2, title: 'Promoção exclusiva', description: 'Ganhe 10% de desconto em todos os serviços do salão Estilo & Charme.', date: '2024-11-19' },
  { id: 3, title: 'Agendamento confirmado', description: 'Seu agendamento no salão Elegância Pura foi confirmado para amanhã às 14h.', date: '2024-11-18' },
  { id: 4, title: 'Novo produto no Spa', description: 'O Spa agora tem novos produtos de cuidados para a pele. Visite-nos para mais informações.', date: '2024-11-16' },
];

const NotificationsScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-background-image.jpg' }} // Imagem de fundo
      style={styles.container}
      imageStyle={[styles.backgroundImage, { opacity: isFocused ? 0.4 : 0.7 }]} // Mudando a opacidade da imagem com base no foco
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>

        {/* Linha de ícones no topo */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="heart" size={24} color="#4B4F56" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="calendar" size={24} color="#4B4F56" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="history" size={24} color="#4B4F56" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="user" size={24} color="#4B4F56" />
          </TouchableOpacity>
        </View>

        {/* Título da página */}
        <Text style={styles.pageTitle}>Notificações</Text>

        {/* Lista de notificações */}
        <ScrollView style={styles.notificationList}>
          {notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
              <Text style={styles.notificationDate}>{notification.date}</Text>
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
    color: '#4B4F56',
    marginBottom: 20,
    textAlign: 'center',
  },
  notificationList: { paddingVertical: 10 },
  notificationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo transparente com opacidade
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#4B4F56',
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 12,
    color: '#9b9b9b',
  },
});

export default NotificationsScreen;
