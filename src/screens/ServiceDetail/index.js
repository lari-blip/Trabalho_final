import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

const ServiceDetailScreen = ({ route }) => {
    const { service } = route.params;
    const navigation = useNavigation();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
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
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDark ? '#121212' : '#f5f5f5' }]}>
            <Image source={{ uri: service.image }} style={styles.image} />

            <View style={styles.statusContainer}>
                <View style={styles.statusBox}>
                    <Text style={[styles.statusNumber, { color: isDark ? '#fff' : '#333' }]}>{followers}</Text>
                    <Text style={[styles.statusText, { color: isDark ? '#bbb' : '#333' }]}>Seguidores</Text>
                </View>
                <View style={styles.statusBox}>
                    <Text style={[styles.statusNumber, { color: isDark ? '#fff' : '#333' }]}>55</Text>
                    <Text style={[styles.statusText, { color: isDark ? '#bbb' : '#333' }]}>Seguindo</Text>
                </View>
                <View style={styles.statusBox}>
                    <Text style={[styles.statusNumber, { color: isDark ? '#fff' : '#333' }]}>100</Text>
                    <Text style={[styles.statusText, { color: isDark ? '#bbb' : '#333' }]}>Serviços</Text>
                </View>
            </View>

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

            <Text style={[styles.name, { color: isDark ? '#fff' : '#333' }]}>{service.name}</Text>
            <Text style={[styles.price, { color: isDark ? '#bbb' : '#333' }]}>Preço: {service.price}</Text>
            <Text style={[styles.stars, { color: isDark ? '#ffd700' : '#f39c12' }]}>Avaliação: {'★'.repeat(service.stars)}{'☆'.repeat(5 - service.stars)}</Text>
            <Text style={[styles.address, { color: isDark ? '#bbb' : '#333' }]}>Endereço: {service.address}</Text>
            <Text style={[styles.hours, { color: isDark ? '#bbb' : '#333' }]}>Horário de Funcionamento: {service.hours}</Text>
            <Text style={[styles.description, { color: isDark ? '#bbb' : '#333' }]}>{service.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
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
    },
    statusText: {
        fontSize: 12,
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
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        marginBottom: 10,
    },
    stars: {
        fontSize: 18,
        marginBottom: 10,
    },
    address: {
        fontSize: 16,
        marginBottom: 10,
    },
    hours: {
        fontSize: 16,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ServiceDetailScreen;
