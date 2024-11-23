import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const salons = [
    { id: 1, name: 'Beleza Total', image: 'https://i.imgur.com/LMaopsx.jpeg' },
    { id: 2, name: 'Estilo & Charme', image: 'https://i.imgur.com/hb3a5yf.jpeg' },
    { id: 3, name: 'Toque de Classe', image: 'https://i.imgur.com/bh0L2nz.jpeg' },
    { id: 4, name: 'Elegância Pura', image: 'https://i.imgur.com/k0wVYLI.jpeg' },
    { id: 5, name: 'Espaço Dellas', image: 'https://i.imgur.com/8qN1cnP.jpeg' },
];

const FavoritesScreen = ({ route }) => {
    const { favorites } = route.params;
    const favoriteSalons = salons.filter((salon) => favorites.has(salon.id));

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Favoritos</Text>
            {favoriteSalons.length === 0 ? (
                <Text style={styles.noFavorites}>Nenhum salão favorito</Text>
            ) : (
                <View style={styles.salonCardContainer}>
                    {favoriteSalons.map((salon) => (
                        <View key={salon.id} style={styles.salonCard}>
                            <Image source={{ uri: salon.image }} style={styles.salonImage} />
                            <Text style={styles.salonName}>{salon.name}</Text>
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20 },
    sectionTitle: { fontSize: 22, fontWeight: '600', color: '#4B4F56', marginTop: 40, marginBottom: 15 },
    noFavorites: { fontSize: 16, color: '#9b9b9b', textAlign: 'center', marginTop: 20 },
    salonCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Espaço uniforme entre os itens
    },
    salonCard: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginBottom: 20,
        alignItems: 'center',
        padding: 15,
        width: '48%', // Largura de cada cartão para caber em duas colunas com espaçamento
    },
    salonImage: { width: 120, height: 120, borderRadius: 15, marginBottom: 10 },
    salonName: { fontSize: 16, color: '#4B4F56', fontWeight: '600', textAlign: 'center' },
});

export default FavoritesScreen;
