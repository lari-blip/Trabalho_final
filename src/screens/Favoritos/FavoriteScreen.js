import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

const salons = [
    { id: 1, name: 'Beleza Total', image: 'https://i.imgur.com/LMaopsx.jpeg' },
    { id: 2, name: 'Estilo & Charme', image: 'https://i.imgur.com/hb3a5yf.jpeg' },
    { id: 3, name: 'Toque de Classe', image: 'https://i.imgur.com/bh0L2nz.jpeg' },
    { id: 4, name: 'Elegância Pura', image: 'https://i.imgur.com/k0wVYLI.jpeg' },
    { id: 5, name: 'Espaço Dellas', image: 'https://i.imgur.com/8qN1cnP.jpeg' },
];

const FavoritesScreen = ({ route }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { favorites } = route.params;
    const favoriteSalons = salons.filter((salon) => favorites.has(salon.id));

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDark ? '#121212' : '#F8F8F8' }]}>
            <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#4B4F56' }]}>Favoritos</Text>
            {favoriteSalons.length === 0 ? (
                <Text style={[styles.noFavorites, { color: isDark ? '#bbb' : '#9b9b9b' }]}>Nenhum salão favorito</Text>
            ) : (
                <View style={styles.salonCardContainer}>
                    {favoriteSalons.map((salon) => (
                        <View key={salon.id} style={[styles.salonCard, { backgroundColor: isDark ? '#333' : '#FFF' }]}>
                            <Image source={{ uri: salon.image }} style={styles.salonImage} />
                            <Text style={[styles.salonName, { color: isDark ? '#fff' : '#4B4F56' }]}>{salon.name}</Text>
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    sectionTitle: { fontSize: 22, fontWeight: '600', marginTop: 40, marginBottom: 15 },
    noFavorites: { fontSize: 16, textAlign: 'center', marginTop: 20 },
    salonCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    salonCard: {
        borderRadius: 15,
        marginBottom: 20,
        alignItems: 'center',
        padding: 15,
        width: '48%',
    },
    salonImage: { width: 120, height: 120, borderRadius: 15, marginBottom: 10 },
    salonName: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});

export default FavoritesScreen;
