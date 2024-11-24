// src/screens/Categorias/index.js

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Definindo as categorias com seus serviços
const categories = [
    {
        name: 'Unhas',
        image: 'https://i.pinimg.com/736x/85/f9/5d/85f95dfab5b4b80ccc9fae275c7bec5f.jpg',
        services: [
            { name: 'Manicure', image: 'https://i.pinimg.com/736x/52/a6/f7/52a6f7b709d8ab4690ee37594c5b6c18.jpg' },
            { name: 'Pedicure', image: 'https://i.pinimg.com/736x/b4/57/7b/b4577b4d9f37195b3d2d53a7e1f7e7bf.jpg' },
            { name: 'Unhas decoradas', image: 'https://i.pinimg.com/736x/3f/79/12/3f791226df5898fcefdef67dd64d9deb.jpg' },
        ],
    },
    {
        name: 'Cabelos',
        image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg',
        services: [
            { name: 'Corte', image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg' },
            { name: 'Pintura', image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg' },
            { name: 'Escova', image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg' },
            { name: 'Tratamento capilar', image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg' },
        ],
    },
    // Adicione as outras categorias aqui...
];

const CategoriaScreen = ({ navigation, route }) => {
    const { categoryName } = route.params;

    // Encontrar a categoria correspondente
    const category = categories.find(cat => cat.name === categoryName);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{categoryName}</Text>

            {/* Imagem da categoria */}
            {category ? (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: category.image }} style={styles.categoryImage} />
                </View>
            ) : (
                <Text style={styles.errorText}>Categoria não encontrada</Text>
            )}

            {/* Lista de serviços */}
            <Text style={styles.description}>Serviços disponíveis:</Text>
            <ScrollView style={styles.servicesContainer}>
                {category && category.services.map((service, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.serviceItem}
                        onPress={() => {
                            // Navegar para a tela de detalhes do serviço com a categoria correta
                            navigation.navigate('ServicoDetalhes', { category: service.name });
                        }}
                    >
                        <Image source={{ uri: service.image }} style={styles.serviceImage} />
                        <Text style={styles.serviceText}>{service.name}</Text>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </View>
    );
};

// Estilos para o componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    categoryImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#555',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
    servicesContainer: {
        marginTop: 10,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    serviceImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    serviceText: {
        fontSize: 16,
        color: '#333',
    },
});

export default CategoriaScreen;
