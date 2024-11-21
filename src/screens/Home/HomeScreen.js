import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import PerfilSalao from '../PerfilSalão';

const categories = [
  { name: 'Unhas', image: 'https://i.pinimg.com/736x/85/f9/5d/85f95dfab5b4b80ccc9fae275c7bec5f.jpg' },
  { name: 'Cabelos', image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg' },
  { name: 'Sobrancelhas', image: 'https://i.pinimg.com/736x/58/b1/be/58b1be49118054d8486d0f8fcfab8946.jpg' },
  { name: 'Cílios', image: 'https://i.pinimg.com/736x/ed/87/af/ed87afb40541358b2dc537c628bc89f6.jpg' },
  { name: 'Maquiagem', image: 'https://i.pinimg.com/736x/80/e7/54/80e75455e397c2f131eec4670e6721aa.jpg' },
  { name: 'Barba', image: 'https://i.pinimg.com/736x/11/a0/be/11a0bef51cb81e075e627d6190c19167.jpg' },
];

const salons = [
  { id: 1, name: 'Beleza Total', image: 'https://i.imgur.com/LMaopsx.jpeg' },
  { id: 2, name: 'Estilo & Charme', image: 'https://i.imgur.com/hb3a5yf.jpeg' },
  { id: 3, name: 'Toque de Classe', image: 'https://i.imgur.com/bh0L2nz.jpeg' },
  { id: 4, name: 'Elegância Pura', image: 'https://i.imgur.com/k0wVYLI.jpeg' },
  { id: 5, name: 'Espaço Dellas', image: 'https://i.imgur.com/8qN1cnP.jpeg' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/ULWXfpT.png' }} // Substitua com a URL ou o caminho da sua logo
          style={styles.logo}
        />
      </View>

      {/* Barra de pesquisa */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar serviços ou salões..."
        placeholderTextColor="#9d9d9d"
      />

      {/* Ícones de navegação */}
      <View style={styles.headerIcons}>
        {['heart', 'history', 'calendar', 'users'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.iconButton}>
            <Icon name={icon} size={24} color="#5E3B26" />
            <Text style={styles.iconText}>
              {icon === 'heart'
                ? 'Favoritos'
                : icon === 'history'
                  ? 'Histórico'
                  : icon === 'calendar'
                    ? 'Agenda'
                    : 'Perfil'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Banner */}
      <Image
        source={{
          uri: 'https://i.imgur.com/8bAKt9p.jpeg',
        }}
        style={styles.banner}
      />

      {/* Seção Categorias */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((category) => (
          <TouchableOpacity key={category.name} style={styles.categoryCard}>
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Seção Salões */}
      <Text style={styles.sectionTitle}>Salões</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.salonScroll}>
        {salons.map((salon) => (
          <TouchableOpacity key={salon.id} style={styles.salonCard}>
            <Image source={{ uri: salon.image }} style={styles.salonImage} />
            <Text style={styles.salonName}>{salon.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f7',
    padding: 15,
  },
  contentContainer: {
    paddingBottom: 20, // Adicionando um padding extra para o final da tela
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 50,
    resizeMode: 'contain',
  },
  searchBar: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingLeft: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    fontSize: 14,
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  iconText: {
    color: '#5E3B26',
    fontSize: 12,
    marginTop: 6,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5E3B26',
    marginBottom: 12,
    textAlign: 'left',
  },
  categoryScroll: {
    paddingVertical: 10,
  },
  categoryCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginRight: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
    padding: 12,
    justifyContent: 'center',
  },
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#5E3B26',
    textAlign: 'center',
  },
  salonScroll: {
    paddingVertical: 10,
  },
  salonCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginRight: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
    padding: 12,
  },
  salonImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
  },
  salonName: {
    fontSize: 14,
    color: '#5E3B26',
    textAlign: 'center',
  },
});

export default HomeScreen;