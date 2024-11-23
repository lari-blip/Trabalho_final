import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function PerfilSalao() {
    const navigation = useNavigation();
    const [followers, setFollowers] = useState(155);

    const [likes, setLikes] = useState([0, 0, 0]);
    const [comments, setComments] = useState([[], [], []]);
    const [commentingPostId, setCommentingPostId] = useState(null);
    const [newComment, setNewComment] = useState("");

    const handleAgendar = () => {
        navigation.navigate('Agendamento', {
            profileName: 'Beleza Total',
            profileImage: 'https://i.imgur.com/LMaopsx.jpeg',
        });
    };

    const handleFollow = () => {
        setFollowers(followers + 1);
    };

    const posts = [
        { id: 1, title: "Hidratação e cabelo finalizado", content: "Marque ja a sua para brilhar neste natal.", image: 'https://beautyblog.com.br/wp-content/uploads/2018/08/Corte-longo-repicado-09.jpg' },
        { id: 2, title: "Venha fazer suas unhas natalinas", content: "Super promoção na unha natalina, venha fazer sua unha conosco.", image: 'https://www.unhasesmaltes.com.br/_next/image?url=https%3A%2F%2Fmelhoresdicas.s3.amazonaws.com%2Fstyles%2F636x636%2Fs3%2F2024-06%2Funhas-decoradas-para-o-natal-ideias-criativas-e-faceis-para-brilhar-quadrada.jpg.webp%3Fitok%3De_CHfs7x&w=1920&q=75' },
        { id: 3, title: "Sobrancelhas", content: "Antes e depois.", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoNJ-9Tkhh9R3qSCjHPaxtcRgUHVJOaXHkQ&s' },
    ];

    const handleLike = (id) => {
        const updatedLikes = [...likes];
        updatedLikes[id] += 1;
        setLikes(updatedLikes);
    };

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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.imgur.com/LMaopsx.jpeg' }}
                    style={styles.image}
                />

                <Text style={styles.title}>Beleza Total</Text>
            </View>

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

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonFollow} onPress={handleFollow}>
                    <MaterialIcons name="favorite" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Seguir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSchedule} onPress={handleAgendar}>
                    <MaterialIcons name="event" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.categoryImage} source={{ uri: 'https://img.freepik.com/vetores-gratis/mulher-com-icone-de-cabelo-comprido_1308-127889.jpg' }} />
                <Image style={styles.categoryImage} source={{ uri: 'https://png.pngtree.com/png-clipart/20210725/original/pngtree-watermelon-red-female-with-nail-polish-in-hand-png-image_6566292.jpg' }} />
                <Image style={styles.categoryImage} source={{ uri: 'https://img.myloview.com.br/quadros/olhos-com-sobrancelha-e-cilios-longos-e-pincas-para-construir-logotipo-para-sobrancelha-mater-sobrancelha-de-extensao-de-cilios-ilustracao-do-vetor-700-108407122.jpg' }} />
            </ScrollView>

            <Text style={styles.sectionTitle}>Fotos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/236x/7b/51/80/7b5180e1dd9b4e3ef8efc004af09c48b.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://www.fotosdecasamentos.com.br/wp-content/uploads/2022/07/unhas-decoradas-para-casamento01.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/564x/05/87/66/058766173fa204420c5dad86f6d73b6c.jpg' }} />
            </ScrollView>

            <Text style={styles.sectionTitle}>Posts</Text>

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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7f7',
        padding: 16,
    },
    header: {
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#5E3B26',
        marginTop: 8,
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5E3B26',
        marginBottom: 12,
        textAlign: 'left',
    },
    scrollHorizontal: {
        marginBottom: 20,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginRight: 12,
    },
    photoImage: {
        width: 180,
        height: 180,
        borderRadius: 12,
        marginRight: 12,
    },

    activityCard: {
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        elevation: 10,
        width: '500',
    },
    activityTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    activityImage: {
        width: '450',
        height: 450,
        borderRadius: 10,
        marginTop: 10,
    },
    activityContent: {
        marginTop: 15,
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
        marginTop: 15,
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
});