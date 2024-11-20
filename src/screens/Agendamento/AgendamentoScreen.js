import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default function AgendamentoScreen() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedHour, setSelectedHour] = useState(null);
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const services = [
        { id: 1, title: "Corte de Cabelo", price: "R$ 50", image: 'https://inspiracabelo.com.br/wp-content/uploads/2024/03/corte-de-cabelo-feminino-degrade-repicado-6.jpg', isPopular: true, isNew: false},
        { id: 2, title: "Manicure", price: "R$ 30", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FZ6hNkICLSqM_uyc4JnOz5PZFdHZIkT1EQ&s', isPopular: false, isNew: true },
        { id: 3, title: "Massagem", price: "R$ 100", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3G_tL-c_lFH5oGI3Aw8eM5qA_-Bs7bLyxw&s', isPopular: false, isNew: false },
    ];

    const hoursAvailable = [
        { id: 1, time: "14:00h - 15:00h" },
        { id: 2, time: "15:00h - 16:00h" },
        { id: 3, time: "16:00h - 17:00h" },
    ];

    const reviews = [
        { id: 1, name: "Carlos Silva", rating: 5, comment: "Excelente atendimento!", image: 'https://play-lh.googleusercontent.com/HmVf1Zt8kyRXXj7S2hm1Al0hGvwdNA5konE35O-x76LvKzBwqR65ib2IiGtlH8tl-Fc=w526-h296-rw' },
        { id: 2, name: "Maria Oliveira", rating: 4, comment: "Ótimo salão!", image: 'https://example.com/user2.jpg' },
    ];

    const handleDaySelect = (day) => {
        setSelectedDay(day);
    };

    const handleChecarHorarios = () => {
        setIsExpanded(!isExpanded);
    };

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
    };

    const handleAction = (action) => {
        Alert.alert(action);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.salonName}>Salão Beleza Perfeita</Text>

            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -23.550520,
                        longitude: -46.633308,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <Marker coordinate={{ latitude: -23.550520, longitude: -46.633308 }} />
                </MapView>
            </View>

            <Text style={styles.title}>Selecione o Dia</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
                {daysOfWeek.map((day, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.dayCard, selectedDay === day && styles.selectedDayCard]}
                        onPress={() => handleDaySelect(day)}>
                        <Text style={[styles.dayText, selectedDay === day && styles.selectedDayText]}>
                            {day}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity onPress={handleChecarHorarios} style={styles.button}>
                <Text style={styles.buttonText}>Checar Horários</Text>
            </TouchableOpacity>
            {isExpanded && (
                <View style={styles.hoursContainer}>
                    <Text>Horários disponíveis:</Text>
                    <ScrollView horizontal={true} style={styles.hoursScrollContainer}>
                        {hoursAvailable.map((hour) => (
                            <TouchableOpacity
                                key={hour.id}
                                style={[
                                    styles.hourCard,
                                    selectedHour === hour.time && styles.selectedHourCard, // Adiciona borda ao horário selecionado
                                ]}
                                onPress={() => handleHourSelect(hour.time)}>
                                <Text style={styles.hourText}>{hour.time}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}

            <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => handleAction('Entrar em Contato')} style={styles.actionButtonOutline}>
                    <Text style={styles.actionButtonTextOutline}>Entrar em Contato</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAction('Ver Perfil')} style={styles.actionButtonOutline}>
                    <Text style={styles.actionButtonTextOutline}>Ver Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAction('Agendar Horário')} style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Agendar Horário</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Serviços em Destaque</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
                {services.map((service) => (
                    <View key={service.id} style={styles.serviceCard}>
                        {service.isPopular && <Text style={styles.popularTag}>Popular</Text>}
                        {service.isNew && <Text style={styles.newTag}>Novo</Text>}
                        <Image source={{ uri: service.image }} style={styles.serviceImage} />
                        <Text style={styles.serviceTitle}>{service.title}</Text>
                        <Text style={styles.servicePrice}>{service.price}</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.title}>Avaliações dos Clientes</Text>
            <ScrollView horizontal={true} style={styles.reviewsContainer}>
                {reviews.map((review) => (
                    <View key={review.id} style={styles.reviewCard}>
                        <Image source={{ uri: review.image }} style={styles.reviewImage} />
                        <View style={styles.reviewDetails}>
                            <Text style={styles.reviewName}>{review.name}</Text>
                            <Text style={styles.reviewRating}>{'⭐'.repeat(review.rating)}</Text>
                            <Text style={styles.reviewComment}>{review.comment}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.title}>Últimas Atividades</Text>
            <ScrollView horizontal={true} style={styles.activitiesContainer}>
                <View style={styles.activityCard}>
                    <Text>Postagem recente 1</Text>
                </View>
                <View style={styles.activityCard}>
                    <Text>Postagem recente 2</Text>
                </View>
            </ScrollView>

            <Text style={styles.title}>Informações do Perfil</Text>
            <Text>Sobre nós: Um salão com excelente atendimento e serviços de qualidade.</Text>
            <Text>Endereço: Rua Exemplo, 123 - Centro</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    salonName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    mapContainer: {
        marginLeft: 20,
        width: 400,
        height: 300,
        marginBottom: 16,
    },
    map: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    daysContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    dayCard: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 5,
        backgroundColor: '#E4E4E4FF',
        borderRadius: 5,
    },
    selectedDayCard: {
        backgroundColor: '#F2AA7D',
    },
    dayText: {
        color: '#333',
    },
    selectedDayText: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#F2AA7D',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    hoursContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 16,
    },
    hoursScrollContainer: {
        flexDirection: 'row',
    },
    hourCard: {
        padding: 10,
        backgroundColor: '#E4E4E4FF',
        borderRadius: 5,
        margin: 5,
    },
    selectedHourCard: {
        borderWidth: 2,
        borderColor: '#F2AA7D',
    },
    hourText: {
        color: '#333',
    },
    actionsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 16,
    },
    actionsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 16,
    },
    actionButton: {
        backgroundColor: '#F2AA7D',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
    actionButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    actionButtonOutline: {
        borderColor: '#2E2E2EFF',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        backgroundColor: 'transparent',
    },
    actionButtonTextOutline: {
        color: '#181818FF',
        textAlign: 'center',
    },
    servicesContainer: {
        marginBottom: 16,
        borderColor: '#8F2222FF',
    },
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
        borderRadius: 10,
    },
    serviceTitle: {
        fontWeight: 'bold',
    },
    servicePrice: {
        color: '#F2AA7D',
    },
    reviewsContainer: {
        marginBottom: 16,
    },
    reviewCard: {
        flexDirection: 'row',
        marginRight: 10,
    },
    reviewImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    reviewDetails: {
        justifyContent: 'center',
    },
    reviewName: {
        fontWeight: 'bold',
    },
    reviewRating: {
        color: '#FFD700',
    },
    reviewComment: {
        color: '#555',
    },
    activitiesContainer: {
        marginBottom: 16,
    },
    activityCard: {
        padding: 10,
        backgroundColor: '#E4E4E4FF',
        borderRadius: 5,
        marginRight: 10,
    },
});
