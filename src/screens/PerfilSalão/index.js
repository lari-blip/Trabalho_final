import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function PerfilSalao() {
    const navigation = useNavigation();
    const [followers, setFollowers] = useState(155);
    const [scaleAnim] = useState(new Animated.Value(1)); 

    const handleAgendar = () => {
        navigation.navigate('Agendamento', {
            profileName: 'Beleza Total',
            profileImage: 'https://i.imgur.com/LMaopsx.jpeg',
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
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.imgur.com/LMaopsx.jpeg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>Beleza Total</Text>
            </View>

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

            {/* Categorias Section */}
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/2c/63/5b/2c635b7bdcfdc258c59c5878e91ebd32.jpg' }} />
                    <Text style={styles.categoryText}>Lisos</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/23/8c/a0/238ca009c0161942c86851ce89cd98d2.jpg' }} />
                    <Text style={styles.categoryText}>Manicure</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/78/87/cd/7887cde955062a3522becef1de7b80ea.jpg' }} />
                    <Text style={styles.categoryText}>Sobrancelha</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/ea/e3/2b/eae32b65582db08aa7867f2352f820c1.jpg' }} />
                    <Text style={styles.categoryText}>Cilíos</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/f3/7f/4a/f37f4a3814ac681e6cac4c22edbc461b.jpg' }} />
                    <Text style={styles.categoryText}>Barba</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.jpg' }} />
                    <Text style={styles.categoryText}>Spa</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/f6/0b/b1/f60bb187c2429eb6490160dcf198013a.jpg' }} />
                    <Text style={styles.categoryText}>Cachos</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/29/04/02/2904028654edebed8a57f5698cb3b5d0.jpg' }} />
                    <Text style={styles.categoryText}>Penteados</Text>
                </View>
                <View style={styles.categoryCard}>
                    <Image style={styles.categoryImage} source={{ uri: 'https://i.pinimg.com/736x/46/0a/59/460a59ea9b2113bb05bc7c01658e4bd9.jpg' }} />
                    <Text style={styles.categoryText}>Noivas</Text>
                </View>
            </ScrollView>

            {/* Fotos Section */}
            <Text style={styles.sectionTitle}>Fotos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/236x/7b/51/80/7b5180e1dd9b4e3ef8efc004af09c48b.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://www.fotosdecasamentos.com.br/wp-content/uploads/2022/07/unhas-decoradas-para-casamento01.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/564x/05/87/66/058766173fa204420c5dad86f6d73b6c.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/736x/e7/e6/d3/e7e6d3d23e61833b802f27aaea263d0a.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/736x/eb/0e/b9/eb0eb9d336b1af62c54e16e0350a967a.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/736x/6d/fa/7c/6dfa7c5c354c708385824c7d823ccbbf.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/736x/38/95/a4/3895a4db2f0512f5434aa154d5fd2c46.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/736x/e5/5e/45/e55e4573370fa83cd28117c95e62af00.jpg' }} />
            </ScrollView>

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
    categoryCard: {
        alignItems: 'center',
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
    categoryText: {
        fontSize: 14,
        marginTop: 8,
        color: '#555',
    },
    photoImage: {
        width: 180,
        height: 180,
        borderRadius: 12,
        marginRight: 12,
    },
});
