import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ServiceCard({ service, onPress }) {
    return (
        <View style={styles.serviceCard}>
            {service.isPopular && <Text style={styles.popularTag}>Popular</Text>}
            {service.isNew && <Text style={styles.newTag}>Novo</Text>}
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: service.image }} style={styles.serviceImage} />
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    serviceCard: {
        width: 150,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#C2C2C2FF',
        borderRadius: 10,
    },
    popularTag: {
        backgroundColor: '#F2AA7D',
        color: '#fff',
        padding: 5,
        fontSize: 12,
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        zIndex: 1,
    },
    newTag: {
        backgroundColor: '#F2AA7D',
        color: '#fff',
        padding: 5,
        fontSize: 12,
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        zIndex: 1,
    },
    serviceImage: {
        width: '100%',
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRadius: 10,
    },
    serviceTitle: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 3,
    },
    servicePrice: {
        color: '#F2AA7D',
        marginLeft: 5,
        marginBottom: 8,
        fontSize: 18,
    },
});
