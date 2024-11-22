import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ExploreScreen({ navigation }) {
 
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
    <View style={styles.categoryCard}>
      <Text style={styles.sectionTitle}>{item.name}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.images.map((image, index) => (
          <TouchableOpacity
            style={styles.imageCard}
            key={index}
            onPress={() => handleCategoryPress(item.name)} 
          >
            <Image source={{ uri: image }} style={styles.categoryImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Explorar</Text>
      <FlatList
        data={exploreItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f7',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5E3B26',
    marginBottom: 16,
    textAlign: 'center',
    opacity: 0,  
    animation: 'fadeIn 1s ease-out forwards', 
  },
  contentContainer: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#5E3B26',
    marginBottom: 12,
    textAlign: 'left',
  },
  categoryCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  imageCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginRight: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  categoryImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  backButton: {
    backgroundColor: '#5E3B26',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
