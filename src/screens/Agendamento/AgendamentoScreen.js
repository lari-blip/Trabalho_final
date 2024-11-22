import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function AgendamentoScreen() {
    const [likes, setLikes] = useState([0, 0, 0]);
    const [comments, setComments] = useState([[], [], []]);
    const [newComment, setNewComment] = useState("");
    const [commentingPostId, setCommentingPostId] = useState(null);


    const route = useRoute()
    const { profileImage, profileName } = route.params;

    const navigation = useNavigation();
    const [selectedDay, setSelectedDay] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedHour, setSelectedHour] = useState(null);
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const services = [
        { id: 1, title: "Corte de Cabelo", price: "R$ 50", image: 'https://inspiracabelo.com.br/wp-content/uploads/2024/03/corte-de-cabelo-feminino-degrade-repicado-6.jpg', isPopular: true, isNew: false },
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
        { id: 2, name: "Roni", rating: 2, comment: "console.log('Ótimo site!')", image: 'https://styles.redditmedia.com/t5_2i7tcq/styles/profileIcon_xv5w11vh517c1.jpeg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=1ef623168cc4ae8abc170391eb72ae1f0174dab3' },
    ];

    const posts = [
        { id: 1, title: "Novo Corte de Cabelo", content: "Confira os novos cortes de cabelo para este mês!", image: 'https://i.ytimg.com/vi/3Ozm38RdG2s/maxresdefault.jpg' },
        { id: 2, title: "Promoção de Manicure", content: "Manicure com 20% de desconto, agende agora!", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FZ6hNkICLSqM_uyc4JnOz5PZFdHZIkT1EQ&s' },
    ];

    const handleLike = (id) => {
        const updatedLikes = [...likes];
        updatedLikes[id] += 1;
        setLikes(updatedLikes);
    };

    /**
     * Adiciona um comentário ao post
     * 
     * @param {number} postId - ID do post que recebeu o comentário
     * 
     * Função que verifica se o comentário não está vazio e o adiciona ao estado dos comentários.
     * Caso o campo de comentário esteja vazio, exibe um alerta.
     */
    const handleAddComment = (postId) => {
        if (newComment.trim() === "") {
            Alert.alert("Por favor, escreva um comentário.");
            return;
        }
        const updatedComments = [...comments];
        updatedComments[postId].push(newComment);
        setComments(updatedComments);
        setNewComment("");
    };

    const toggleCommentSection = (postId) => {
        setCommentingPostId(commentingPostId === postId ? null : postId);
    };

    const handlePostClick = (postId) => {
        Alert.alert(`Você clicou no post ${postId}`);
    };

    const customMapStyle = [
        { "elementType": "geometry", "stylers": [{ "color": "#f9f9f9" }] },
        { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
        { "elementType": "labels.text.fill", "stylers": [{ "color": "#a5a5a5" }] },
        { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f9f9f9" }] },
        { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#d8d8d8" }] },
        { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }] },
        { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#b0b0b0" }] },
        { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f3e0b8" }] },
        { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#8a8a8a" }] },
        { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f9e2c1" }] },
        { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#7f7f7f" }] },
        { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#f3f3f3" }] },
        { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#a1a1a1" }] }
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
            <Text style={styles.salonName}>{profileName}</Text>

            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    customMapStyle={customMapStyle}
                    initialRegion={{
                        latitude: -23.550520,
                        longitude: -46.633308,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                    showsCompass={true}
                    zoomEnabled={true}
                    rotateEnabled={true}
                >
                    <Marker
                        coordinate={{ latitude: -23.550520, longitude: -46.633308 }}
                        title="Salão Beleza Perfeita"
                        description="Venha nos visitar!"
                    >
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' }}
                            style={{ width: 40, height: 40 }}
                        />
                    </Marker>
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
                                style={[styles.hourCard, selectedHour === hour.time && styles.selectedHourCard]}
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
                <TouchableOpacity onPress={() => navigation.navigate('PerfilSalao')} style={styles.actionButtonOutline}>
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
                        <TouchableOpacity>
                            <Image source={{ uri: service.image }} style={styles.serviceImage} />
                            <Text style={styles.serviceTitle}>{service.title}</Text>
                            <Text style={styles.servicePrice}>{service.price}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.title}>Avaliações dos Clientes</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.reviewsContainer}>
                {reviews.map((review) => (
                    <View key={review.id} style={styles.reviewCard}>
                        <View style={styles.reviewHeader}>
                            <Image source={{ uri: review.image }} style={styles.reviewImage} />
                            <View style={styles.reviewTextContainer}>
                                <Text style={styles.reviewName}>{review.name}</Text>
                                <Text style={styles.reviewRating}>{'⭐'.repeat(review.rating)}</Text>
                            </View>
                        </View>
                        <Text style={styles.reviewComment}>{review.comment}</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.title}>Últimas Atividades</Text>
            {posts.map((post, index) => (
                <View key={post.id} style={styles.activityCard}>
                    <View style={styles.profileInfo}>
                        <Image
                            source={{ uri: 'https://i.imgur.com/LMaopsx.jpeg' }}
                            style={styles.profileThumbnail}
                        />
                        <Text style={styles.profileName}>Beleza Total</Text>
                    </View>
                    <Text style={styles.activityTitle}>{post.title}</Text>

                    <Image source={{ uri: post.image }} style={styles.activityImage} />

                    <View style={styles.activityContent}>
                        <Text style={styles.activityDescription}>{post.content}</Text>


                        <View style={styles.interactions}>
                            <TouchableOpacity onPress={() => handleLike(index)}>
                                <View style={styles.interactionButton}>
                                    <Ionicons name="heart-outline" size={20} color="#F2AA7D" />
                                    <Text style={styles.interactionText}>{likes[index]} Likes</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => toggleCommentSection(index)}>
                                <View style={styles.interactionButton}>
                                    <Ionicons name="chatbubble-outline" size={20} color="#F2AA7D" />
                                    <Text style={styles.interactionText}>{comments[index].length} Comentários</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {commentingPostId === index && (
                            <View style={styles.commentSection}>
                                <TextInput
                                    style={styles.commentInput}
                                    placeholder="Escreva um comentário..."
                                    value={newComment}
                                    onChangeText={setNewComment}
                                />
                                <TouchableOpacity
                                    style={styles.commentButton}
                                    onPress={() => handleAddComment(index)}
                                >
                                    <Text style={styles.commentButtonText}>Comentar</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {commentingPostId === index && (
                            <View style={styles.commentsList}>
                                {comments[index].map((comment, idx) => (
                                    <Text key={idx} style={styles.commentText}>{comment}</Text>
                                ))}
                            </View>
                        )}
                    </View>
                    <View style={styles.separator}></View>
                </View>
            ))}

            <Image
                source={{ uri: 'https://belezanatural.com.br/wp-content/themes/beleza-natural/template_assets/regua2.png' }}
                style={styles.infoImage}
            />
            <View>
                <Text style={styles.profileInfoTitle}>Redes Sociais 🌐</Text>
                <Image
                    source={{
                        uri: 'https://belezanatural.com.br/wp-content/themes/beleza-natural/template_assets/banner_intagram_desktop.png',
                    }}
                    style={styles.socialImage}
            />
                <Text style={styles.title}>Informações do Perfil</Text>
                <View style={styles.profileInfoContainer}>
                    <View style={styles.infoCard}>
                        <Text style={styles.profileInfoTitle}>Sobre nós: 🌟</Text>
                        <Text style={styles.profileInfoText}>
                            Um salão com excelente atendimento e serviços de qualidade.
                        </Text>
                    </View>
                </View>
                <View style={styles.infoCard}>
                    <Text style={styles.profileInfoTitle}>Endereço: 📍</Text>
                    <Text style={styles.profileInfoText}>
                        Rua Exemplo, 123 - Centro
                    </Text>
                </View>

            </View>
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
        marginBottom: 10,
        textAlign: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    mapContainer: {
        width: '100%',
        height: 250,
        borderRadius: 15,
        overflow: 'hidden',
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
    reviewsContainer: {
        marginBottom: 16,
    },
    reviewCard: {
        backgroundColor: '#EBEBEBFF',
        borderRadius: 10,
        padding: 10,
        paddingBottom: 20,
        marginRight: 10,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: 280,
    },
    reviewHeader: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    reviewImage: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginRight: 10,
    },
    reviewTextContainer: {
        flex: 1,
    },
    reviewName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    reviewRating: {
        color: '#FFD700',
        fontSize: 14,
    },
    reviewComment: {
        color: '#555',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 5,
    },
    activitiesContainer: {
        marginBottom: 20,
    },
    activityCard: {
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#D6D6D6FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '450',
    },
    activityTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    socialImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginVertical: 10,
        left: 60,
    },
    profileInfoContainer: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
    },
    infoImage: {
        left: -55,
        width: 680,
        height: '120',
        marginBottom: 10,
    },
    profileInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textAlign: 'center',
    },
    profileInfoText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        textAlign: 'center',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    activityImage: {
        width: '420',
        height: 250,
        borderRadius: 10,
        marginTop: 10,
    },
    activityContent: {
        marginTop: 10,
    },
    activityDescription: {
        color: '#555',
        fontSize: 14,
        marginBottom: 10,
    },
    profileThumbnail: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    profileName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    interactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    interactionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactionText: {
        color: '#F2AA7D',
        marginLeft: 5,
        fontSize: 14,
    },
    commentSection: {
        marginTop: 10,
    },
    commentInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        height: 40,
    },
    commentButton: {
        backgroundColor: '#F2AA7D',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    commentButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    commentsList: {
        marginTop: 10,
    },
    commentText: {
        color: '#555',
        fontSize: 14,
        marginBottom: 5,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#B6B6B6FF',
        marginTop: 20,
        width: '600',
        left: -100,
    },
    profileInfoContainer: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    profileInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileInfoText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
        lineHeight: 24,
    },
});
