import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export default function ExploreScreen({ navigation }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const exploreItems = [
    {
      id: '1',
      name: 'Serviços Premium',
      images: [
        'https://i.imgur.com/H309g2v.jpeg',
        'https://i.imgur.com/M7MQami.jpeg',
        'https://i.imgur.com/kd4Xars.jpeg',
        'https://i.imgur.com/z8aniT3.jpeg',
      ],
    },
    {
      id: '2',
      name: 'Salões Populares',
      images: [
        'https://i.imgur.com/li4cthX.jpeg',
        'https://i.imgur.com/zVNFizP.jpeg',
        'https://i.imgur.com/OcD4a7p.jpeg',
        'https://i.imgur.com/9FINzis.jpeg',
      ],
    },
    {
      id: '3',
      name: 'Cupons e Ofertas',
      images: [
        'https://i.imgur.com/EkCg0eK.jpeg',
        'https://i.imgur.com/ryWBWsh.png',
        'https://i.imgur.com/7KWdbiB.jpeg',
      ],
    },
  ];

  const handleCategoryPress = (categoryName) => {
    navigation.navigate('CategoryDetails', { categoryName });
  };

  const renderItem = ({ item }) => (
    <View style={[styles.categoryCard, { backgroundColor: isDark ? '#333' : 'rgba(255, 255, 255, 0.85)' }]}>
      <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#333' }]}>{item.name}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.images.map((image, index) => (
          <View style={styles.imageCard} key={index}>
            <Image source={{ uri: image }} style={styles.categoryImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/e5/37/3e/e5373ee2006e669ce7443ba43e8a6fe8.jpg' }}
      style={[styles.container, { backgroundColor: isDark ? '#000000' : '#f5f5f5' }]}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={[styles.pageTitle, { color: isDark ? '#fff' : '#333' }]}>Explorar</Text>
        <FlatList
          data={exploreItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity style={[styles.backButton, { backgroundColor: isDark ? '#e9a0b8' : '#e9a0b8' }]} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    flex: 1,
    width: '100%',
    padding: 30,
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    opacity: 0.8,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'left',
  },
  categoryCard: {
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    padding: 12,
  },
  imageCard: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    marginRight: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  backButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
