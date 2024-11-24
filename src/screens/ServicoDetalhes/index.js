import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ServicoDetalhesScreen = ({ route, navigation }) => {
    const { category } = route.params;

    const services = {
        Manicure: [
            { name: 'Manicure: Spa e Lazer', price: 'R$ 50', stars: 4, image: 'https://i.pinimg.com/736x/52/a6/f7/52a6f7b709d8ab4690ee37594c5b6c18.jpg', address: 'Rua Exemplo, 123', hours: '9:00 - 18:00', description: 'Descrição do serviço de Manicure: Spa e Lazer.' },
            { name: 'Manicure: Beleza Total', price: 'R$ 60', stars: 5, image: 'https://i.pinimg.com/736x/b4/57/7b/b4577b4d9f37195b3d2d53a7e1f7e7bf.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Manicure: Beleza Total.' },
            { name: 'Manicure: Glamour Estética', price: 'R$ 55', stars: 3, image: 'https://i.pinimg.com/736x/3f/79/12/3f791226df5898fcefdef67dd64d9deb.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Manicure: Glamour Estética.' },
            // ... Adicione mais serviços conforme necessário
        ],
        Pedicure: [
            { name: 'Pedicure: Beleza Total', price: 'R$ 60', stars: 5, image: 'https://i.pinimg.com/736x/b4/57/7b/b4577b4d9f37195b3d2d53a7e1f7e7bf.jpg', address: 'Rua Exemplo, 456', hours: '10:00 - 19:00', description: 'Descrição do serviço de Pedicure: Beleza Total.' },
            { name: 'Pedicure: Glamour Estética', price: 'R$ 55', stars: 3, image: 'https://i.pinimg.com/736x/3f/79/12/3f791226df5898fcefdef67dd64d9deb.jpg', address: 'Rua Exemplo, 789', hours: '8:00 - 17:00', description: 'Descrição do serviço de Pedicure: Glamour Estética.' },
            // ... Adicione mais serviços conforme necessário
        ],
        // ... Adicione mais categorias conforme necessário
    };

    const selectedServices = services[category] || [];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {selectedServices.length > 0 ? (
                    <View style={styles.servicesGrid}>
                        {selectedServices.map((provider, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.providerContainer}
                                onPress={() => navigation.navigate('ServiceDetail', { service: provider })}
                            >
                                <Image source={{ uri: provider.image }} style={styles.providerImage} />
                                <Text style={styles.providerName}>{provider.name}</Text>
                                <Text style={styles.price}>Preço: {provider.price}</Text>
                                <Text style={styles.stars}>Avaliação: {'★'.repeat(provider.stars)}{'☆'.repeat(5 - provider.stars)}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.errorText}>Nenhum prestador encontrado para a categoria selecionada.</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Adiciona espaço entre os itens
    },
    providerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        width: '48%', // Ajusta a largura dos itens para 48% da tela
    },
    providerImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    providerName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    stars: {
        fontSize: 14,
        color: '#f39c12',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ServicoDetalhesScreen;
