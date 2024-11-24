import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ServiceDetailScreen = ({ route }) => {
    const { service } = route.params;
    const navigation = useNavigation();
    const [followers, setFollowers] = useState(155);
    const [scaleAnim] = useState(new Animated.Value(1));

    const handleAgendar = () => {
        navigation.navigate('Agendamento', {
            profileName: service.name,
            profileImage: service.image,
        });
    };

    const handleFollow = () => {
        setFollowers(followers + 1);
        animateFollowButton();
    };

    const animateFollowButton = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: service.image }} style={styles.image} />

            {/* Followers, Following, Services Status */}
            <View style={styles.statusContainer}>
                <View style={styles.statusBox}>
                    <Text style={styles.statusNumber}>{followers}</Text>
                    <Text style={styles.statusText}>Seguidores</Text>
                </View>
                <View style={styles.statusBox}>
                    <Text style={styles.statusNumber}>55</Text>
                    <Text style={styles.statusText}>Seguindo</Text>
                </View>
                <View style={styles.statusBox}>
                    <Text style={styles.statusNumber}>100</Text>
                    <Text style={styles.statusText}>Serviços</Text>
                </View>
            </View>

            {/* Follow and Schedule Buttons */}
            <View style={styles.buttonContainer}>
                <Animated.View style={[styles.buttonFollow, { transform: [{ scale: scaleAnim }] }]}>
                    <TouchableOpacity onPress={handleFollow} style={styles.buttonFollow}>
                        <MaterialIcons name="favorite" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Seguir</Text>
                    </TouchableOpacity>
                </Animated.View>

                <TouchableOpacity style={styles.buttonSchedule} onPress={handleAgendar}>
                    <MaterialIcons name="event" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.name}>{service.name}</Text>
            <Text style={styles.price}>Preço: {service.price}</Text>
            <Text style={styles.stars}>Avaliação: {'★'.repeat(service.stars)}{'☆'.repeat(5 - service.stars)}</Text>
            <Text style={styles.address}>Endereço: {service.address}</Text>
            <Text style={styles.hours}>Horário de Funcionamento: {service.hours}</Text>
            <Text style={styles.description}>{service.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    stars: {
        fontSize: 18,
        color: '#f39c12',
        marginBottom: 10,
    },
    address: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    hours: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#333',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statusBox: {
        alignItems: 'center',
        width: '30%',
    },
    statusNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5E3B26',
    },
    statusText: {
        fontSize: 12,
        color: '#555',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buttonFollow: {
        backgroundColor: '#e91e63',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginRight: 8,
    },
    buttonSchedule: {
        backgroundColor: '#e14141',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default ServiceDetailScreen;
