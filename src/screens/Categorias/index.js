import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
    {
        name: 'Unhas',
        image: 'https://i.pinimg.com/736x/85/f9/5d/85f95dfab5b4b80ccc9fae275c7bec5f.jpg',
        services: [
            { name: 'Manicure', image: 'https://i.pinimg.com/736x/52/a6/f7/52a6f7b709d8ab4690ee37594c5b6c18.jpg' },
            { name: 'Pedicure', image: 'https://i.pinimg.com/736x/b4/57/7b/b4577b4d9f37195b3d2d53a7e1f7e7bf.jpg' },
            { name: 'Decoradas', image: 'https://i.pinimg.com/736x/3f/79/12/3f791226df5898fcefdef67dd64d9deb.jpg' },
            { name: 'Gel', image: 'https://i.pinimg.com/736x/78/76/65/787665fb49d410d61fc9ffe2ec031451.jpg' },
            { name: 'Extensão', image: 'https://i.pinimg.com/736x/74/8f/96/748f96b1e7fb46e300bcc6c34b4c5d9c.jpg' },
            { name: 'Acrigel', image: 'https://i.pinimg.com/736x/d6/c5/eb/d6c5eb265f54c32dfd92947b5feea2f7.jpg' },
        ],
    },
    {
        name: 'Cabelos',
        image: 'https://i.pinimg.com/736x/02/ef/c5/02efc5d3011192f737d5dfdd34f49942.jpg',
        services: [
            { name: 'Corte', image: 'https://i.pinimg.com/736x/73/72/39/7372398f3166933c89d76ef6c6a6fa1b.jpg' },
            { name: 'Pintura', image: 'https://i.pinimg.com/736x/3b/93/b8/3b93b8a802a37bebbbfc9454aff17984.jpg' },
            { name: 'Escova', image: 'https://i.pinimg.com/736x/df/96/7b/df967b002db9133cec2a7980fb8ada28.jpg' },
            { name: 'Tratamento', image: 'https://i.pinimg.com/736x/a5/3d/15/a53d156184587a898b6838c7239dd683.jpg' },
        ],
    },
    {
        name: 'Sobrancelhas',
        image: 'https://i.pinimg.com/736x/d5/5b/c4/d55bc4219f1380cb66b1edd98e79bca0.jpg',
        services: [
            { name: 'Design', image: 'https://i.pinimg.com/736x/b8/b7/47/b8b747a8f974a509f93f68312806680c.jpg' },
            { name: 'Henna', image: 'https://i.pinimg.com/736x/07/2e/1a/072e1a0b0415ac47d8f08f8338179350.jpg' },
            { name: 'Micropigmentação', image: 'https://i.pinimg.com/736x/6d/6e/17/6d6e17d0282203ea9e6fda757736b696.jpg' },
            { name: 'Microblading', image: 'https://i.pinimg.com/736x/1e/6c/c6/1e6cc698b2532548775e7b084dddc587.jpg' },
        ],
    },
    {
        name: 'Cílios',
        image: 'https://i.pinimg.com/736x/62/e6/c5/62e6c537e72c9d925c256e521ae41ea9.jpg',
        services: [
            { name: 'Alongamento', image: 'https://i.pinimg.com/736x/c9/7f/84/c97f84e01722fb6ea967849bfd3d66c3.jpg' },
            { name: 'Lifting', image: 'https://i.pinimg.com/736x/c7/51/a9/c751a9e853890cd47dd7773e02c1ba91.jpg' },
            { name: 'Postiços', image: 'https://i.pinimg.com/736x/ac/2c/dd/ac2cddd2ab6e837441a8b8079f186485.jpg' },
        ],
    },
    {
        name: 'Maquiagem',
        image: 'https://i.pinimg.com/736x/4f/41/f8/4f41f81abd447739519b9ef0491aefb8.jpg',
        services: [
            { name: 'Airbrush', image: 'https://i.pinimg.com/736x/51/de/58/51de5810fafdc6608bb888e28cf30119.jpg' },
            { name: 'Casamento', image: 'https://i.pinimg.com/736x/1e/9f/14/1e9f14e49e740c852ada357509c3aa0c.jpg' },
            { name: 'Infantil', image: 'https://i.pinimg.com/736x/2d/87/4f/2d874f1375aea202b428258ad18299f9.jpg' },
            { name: 'Artística', image: 'https://i.pinimg.com/736x/a6/42/42/a6424250944740851bd7b77a6668aafa.jpg' },
        ],
    },
    {
        name: 'Barba',
        image: 'https://i.pinimg.com/736x/41/49/2e/41492ec1d96286d47cf6c73c6b944fa3.jpg',
        services: [
            { name: 'Navalhada', image: 'https://i.pinimg.com/736x/51/49/26/514926a9cd60b701f020bd6b432803ba.jpg' },
            { name: 'Tintura', image: 'https://i.pinimg.com/736x/44/1d/4e/441d4e623382856daf4198084ad69741.jpg' },
            { name: 'HotTowelShave', image: 'https://i.pinimg.com/736x/55/02/09/550209bfb3c4a9dab07ec9cc92cb0d64.jpg' },
        ],
    },
    {
        name: 'Spa',
        image: 'https://i.pinimg.com/736x/0d/c7/50/0dc75067eab77e3192562cbb285be5a2.jpg',
        services: [
            { name: 'Aromaterapia', image: 'https://i.pinimg.com/736x/18/4a/f8/184af85d95950aba793eddea0eb9887a.jpg' },
            { name: 'HotStone', image: 'https://i.pinimg.com/736x/c2/0d/1e/c20d1e49fbe9c1e5d2de66d8d214dbe2.jpg' },
        ],
    },
];

const CategoriaScreen = ({ navigation, route }) => {
    const { categoryName } = route.params;
    const category = categories.find(cat => cat.name === categoryName);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{categoryName}</Text>
            {category ? (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: category.image }} style={styles.categoryImage} />
                </View>
            ) : (
                <Text style={styles.errorText}>Categoria não encontrada</Text>
            )}
            <Text style={styles.description}>Serviços disponíveis:</Text>
            <ScrollView style={styles.servicesContainer}>
                {category && category.services.map((service, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.serviceItem}
                        onPress={() => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
        marginTop: -14,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    categoryImage: {
        width: 400,
        height: 220,
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
