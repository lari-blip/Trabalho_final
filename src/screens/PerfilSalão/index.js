import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function PerfilSalao() {
    const navigation = useNavigation();
    const [followers, setFollowers] = useState(155);

    const handleAgendar = () => {
        navigation.navigate('Agendamento', {
            profileName: 'Beleza Total',
            profileImage: 'https://i.imgur.com/LMaopsx.jpeg',
        });
    };

    const handleFollow = () => {
        setFollowers(followers + 1);
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
                <TouchableOpacity style={styles.buttonFollow} onPress={handleFollow}>
                    <MaterialIcons name="favorite" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Seguir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSchedule} onPress={handleAgendar}>
                    <MaterialIcons name="event" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>

            {/* Categorias Section */}
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.categoryImage} source={{ uri: 'https://img.freepik.com/vetores-gratis/mulher-com-icone-de-cabelo-comprido_1308-127889.jpg' }} />
                <Image style={styles.categoryImage} source={{ uri: 'https://png.pngtree.com/png-clipart/20210725/original/pngtree-watermelon-red-female-with-nail-polish-in-hand-png-image_6566292.jpg' }} />
                <Image style={styles.categoryImage} source={{ uri: 'https://img.myloview.com.br/quadros/olhos-com-sobrancelha-e-cilios-longos-e-pincas-para-construir-logotipo-para-sobrancelha-mater-sobrancelha-de-extensao-de-cilios-ilustracao-do-vetor-700-108407122.jpg' }} />
            </ScrollView>

            {/* Fotos Section */}
            <Text style={styles.sectionTitle}>Fotos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/236x/7b/51/80/7b5180e1dd9b4e3ef8efc004af09c48b.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://www.fotosdecasamentos.com.br/wp-content/uploads/2022/07/unhas-decoradas-para-casamento01.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/564x/05/87/66/058766173fa204420c5dad86f6d73b6c.jpg' }} />
            </ScrollView>

            {/* Posts Section (Empty for now) */}
            <Text style={styles.sectionTitle}>Posts</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7f7',
        padding: 16, // Ajuste o padding para um melhor espaçamento
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
        marginBottom: 16, // Reduzi o espaço entre as informações de status
    },
    statusBox: {
        alignItems: 'center',
        width: '30%', // Ajustei a largura dos boxes para um visual mais balanceado
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
});
