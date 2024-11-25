import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { name: 'Unhas', image: 'https://i.pinimg.com/736x/85/f9/5d/85f95dfab5b4b80ccc9fae275c7bec5f.jpg' },
  { name: 'Cabelos', image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg' },
  { name: 'Sobrancelhas', image: 'https://i.pinimg.com/736x/58/b1/be/58b1be49118054d8486d0f8fcfab8946.jpg' },
  { name: 'Cílios', image: 'https://i.pinimg.com/736x/ed/87/af/ed87afb40541358b2dc537c628bc89f6.jpg' },
  { name: 'Maquiagem', image: 'https://i.pinimg.com/736x/80/e7/54/80e75455e397c2f131eec4670e6721aa.jpg' },
  { name: 'Barba', image: 'https://i.pinimg.com/736x/11/a0/be/11a0bef51cb81e075e627d6190c19167.jpg' },
  { name: 'Spa', image: 'https://i.pinimg.com/736x/90/e8/8b/90e88bf68152266da89017591b6cbed6.jpg' },
];

const salons = [
  { id: 1, name: 'Beleza Total', image: 'https://i.imgur.com/LMaopsx.jpeg' },
  { id: 2, name: 'Estilo & Charme', image: 'https://i.imgur.com/hb3a5yf.jpeg' },
  { id: 3, name: 'Toque de Classe', image: 'https://i.imgur.com/bh0L2nz.jpeg' },
  { id: 4, name: 'Elegância Pura', image: 'https://i.imgur.com/k0wVYLI.jpeg' },
  { id: 5, name: 'Espaço Dellas', image: 'https://i.imgur.com/8qN1cnP.jpeg' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState(new Set());
  const [scaleAnim] = useState(new Animated.Value(1));

  const toggleFavorite = (salonId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(salonId)) {
        newFavorites.delete(salonId);
      } else {
        newFavorites.add(salonId);
      }
      return newFavorites;
    });
  };

  const animateHeart = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.5, duration: 200, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
  };

  const handleSalonClick = (salonId) => {
    const selectedSalon = salons.find((salon) => salon.id === salonId);
    navigation.navigate('PerfilSalao', {
      profileImage: selectedSalon.image,
      profileName: selectedSalon.name,
    });
  };

  const handleCategoryClick = (categoryName) => {
    navigation.navigate('Categoria', { categoryName });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/ce/0a/fb/ce0afb23a19a0de0341b3dc94c0343b9.jpg' }}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://i.imgur.com/ULWXfpT.png' }} style={styles.logo} />
        </View>

        <TextInput
          style={styles.searchBar}
          placeholder="Buscar serviços ou salões..."
          placeholderTextColor="#9b9b9b"
        />

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

        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {categories.map((category) => (
            <TouchableOpacity key={category.name} style={styles.categoryCard} onPress={() => handleCategoryClick(category.name)}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Salões</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.salonScroll}>
          {salons.map((salon) => {
            const isFavorite = favorites.has(salon.id);
            return (
              <View key={salon.id} style={styles.salonCard}>
                <TouchableOpacity onPress={() => handleSalonClick(salon.id)}>
                  <Image source={{ uri: salon.image }} style={styles.salonImage} />
                </TouchableOpacity>
                <Text style={styles.salonName}>{salon.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    toggleFavorite(salon.id);
                    animateHeart();
                  }}
                  style={styles.favoriteIcon}
                >
                  <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <Icon
                      name={isFavorite ? 'heart' : 'heart-o'}
                      size={24}
                      color={isFavorite ? '#F2AA7D' : '#4B4F56'}
                    />
                  </Animated.View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  backgroundImage: { opacity: 0.3 },
  contentContainer: { paddingBottom: 20 },
  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 140, height: 200, resizeMode: 'contain' },
  searchBar: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingLeft: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 20,
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: { fontSize: 22, fontWeight: '600', color: '#4B4F56', marginBottom: 15 },
  categoryScroll: { paddingVertical: 10 },
  categoryCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 15,
    marginRight: 15,
    padding: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  categoryImage: { width: 100, height: 100, borderRadius: 15, marginBottom: 8 },
  categoryText: {
    fontSize: 14,
    color: '#4B4F56',
  },
  salonScroll: { paddingVertical: 10 },
  salonCard: { width: 140, marginRight: 15 },
  salonImage: { width: '100%', height: 100, borderRadius: 15, marginBottom: 10 },
  salonName: { fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' },
  favoriteIcon: { alignSelf: 'center' },
  iconRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  icon: { padding: 10 },
});

export default HomeScreen;
