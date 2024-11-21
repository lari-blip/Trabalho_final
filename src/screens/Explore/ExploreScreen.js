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

  const renderItem = ({ item }) => (
    <View style={styles.categoryCard}>
      <Text style={styles.sectionTitle}>{item.name}</Text>
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
    <View style={styles.container}>


      <Text style={styles.sectionTitle}>Explorar</Text>
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
    padding: 15,
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
    color: '#5E3B26',
    marginBottom: 12,
    textAlign: 'left',
  },
  categoryCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    padding: 12,
  },
  imageCard: {
    backgroundColor: '#FFF',
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
    backgroundColor: '#5E3B26',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});