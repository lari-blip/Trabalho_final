import React from 'react';
import { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";

export default function PerfilSalao() {
    const navigation = useNavigation();
    const [cont, setCont] = useState(155)
    const [followers, setFollowers] = useState(155);

    const handleAgendar = () => {
        navigation.navigate('Agendamento');
    };

    const incrementar = () => setCont(cont + 1);
    const handleFollow = () => {
        setFollowers(followers + 1);
    };

    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            {/* Header with Image and Title */}
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.imgur.com/LMaopsx.jpeg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>Beleza Total</Text>
            </View>

            <Text style={styles.title}>Beleza Total</Text>

            <View style={styles.status}>
                <View>
                    <Text style={styles.numero}>{cont}</Text>
                    <Text style={styles.texto}>Seguidores</Text>
            {/* Followers, Following, Services Status */}
            <View style={styles.statusContainer}>
                <View style={styles.statusBox}>
                    <Text style={styles.statusNumber}>{followers}</Text>
                    <Text style={styles.statusText}>Seguidores</Text>
                </View>
                <View>
                    <Text style={styles.numero}>55</Text>
                    <Text style={styles.texto}>Seguindo</Text>
                <View style={styles.statusBox}>
                    <Text style={styles.statusNumber}>55</Text>
                    <Text style={styles.statusText}>Seguindo</Text>
                </View>
                <View style={styles.statusBox}>
                    <Text style={styles.statusNumber}>100</Text>
                    <Text style={styles.statusText}>Serviços</Text>
                </View>
            </View>

            <View style={styles.button}>
                <MaterialIcons name="favorite" color="red" size={25} />

                <TouchableOpacity
                    style={styles.buttonSeguir}
                    onPress={incrementar}>
            {/* Follow and Schedule Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonFollow} onPress={handleFollow}>
                    <MaterialIcons name="favorite" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Seguir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonAguendar}
                    onPress={handleAgendar}
                >
                <TouchableOpacity style={styles.buttonSchedule} onPress={handleAgendar}>
                    <MaterialIcons name="event" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
                <MaterialIcons name="more-horiz" color="black" size={25} />
            </View>

            <Text style={styles.categorias}>Categorias
                <MaterialIcons name="chevron-right" size={30} color="#000" style={styles.scrollIcon} />
            </Text>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                <View style={styles.cat}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/vetores-gratis/mulher-com-icone-de-cabelo-comprido_1308-127889.jpg' }}
                        style={styles.catImage}
                    />
                    <Image
                        source={{ uri: 'https://png.pngtree.com/png-clipart/20210725/original/pngtree-watermelon-red-female-with-nail-polish-in-hand-png-image_6566292.jpg' }}
                        style={styles.catImage}
                    />
                    <Image
                        source={{ uri: 'https://img.myloview.com.br/quadros/olhos-com-sobrancelha-e-cilios-longos-e-pincas-para-construir-logotipo-para-sobrancelha-mater-sobrancelha-de-extensao-de-cilios-ilustracao-do-vetor-700-108407122.jpg' }}
                        style={styles.catImage}
                    />
                    <Image
                        source={{ uri: 'https://img.lovepik.com/png/20231114/make-up-sticker-cartoon_587401_wh860.png' }}
                        style={styles.catImage}
                    />
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/65/d0/94/65d0942d0f63279339b475c2f28d361c.jpg' }}
                        style={styles.catImage}
                    />
                    <Image
                        source={{ uri: 'https://img.freepik.com/premium-vector/bearded-barber-head-logo-stylish-circle-vector_1023984-20538.jpg?w=826' }}
                        style={styles.catImage}
                    />
                </View>
            {/* Categorias Section */}
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.categoryImage} source={{ uri: 'https://img.freepik.com/vetores-gratis/mulher-com-icone-de-cabelo-comprido_1308-127889.jpg' }} />
                <Image style={styles.categoryImage} source={{ uri: 'https://png.pngtree.com/png-clipart/20210725/original/pngtree-watermelon-red-female-with-nail-polish-in-hand-png-image_6566292.jpg' }} />
                <Image style={styles.categoryImage} source={{ uri: 'https://img.myloview.com.br/quadros/olhos-com-sobrancelha-e-cilios-longos-e-pincas-para-construir-logotipo-para-sobrancelha-mater-sobrancelha-de-extensao-de-cilios-ilustracao-do-vetor-700-108407122.jpg' }} />
            </ScrollView>


            <Text style={styles.palavra}>Fotos
                <MaterialIcons name="chevron-right" size={30} color="#000" style={styles.scrollIcon} />
            </Text>


            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
            >
                <View style={styles.fotos}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/236x/7b/51/80/7b5180e1dd9b4e3ef8efc004af09c48b.jpg' }}
                        style={styles.fotosImage}
                    />
                    <Image
                        source={{ uri: 'https://www.fotosdecasamentos.com.br/wp-content/uploads/2022/07/unhas-decoradas-para-casamento01.jpg' }}
                        style={styles.fotosImage}
                    />
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/05/87/66/058766173fa204420c5dad86f6d73b6c.jpg' }}
                        style={styles.fotosImage}
                    />
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/id/1435350595/pt/foto/makeup-artist-plucks-eyebrows-long-lasting-styling-of-the-eyebrows-and-color-the-eyebrows.jpg?s=612x612&w=0&k=20&c=jbW5TwC23uj6MqtQvxvBZNUsxt1sb7TZxk456Btm118=' }}
                        style={styles.fotosImage}
                    />
                    <Image
                        source={{ uri: 'https://blog.voraxacessorios.com.br/wp-content/uploads/2024/04/12_cortes_de_cabelo_masculino_para_conhecer_em_2024.jpg' }}
                        style={styles.fotosImage}
                    />
                </View>
            {/* Fotos Section */}
            <Text style={styles.sectionTitle}>Fotos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorizontal}>
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/236x/7b/51/80/7b5180e1dd9b4e3ef8efc004af09c48b.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://www.fotosdecasamentos.com.br/wp-content/uploads/2022/07/unhas-decoradas-para-casamento01.jpg' }} />
                <Image style={styles.photoImage} source={{ uri: 'https://i.pinimg.com/564x/05/87/66/058766173fa204420c5dad86f6d73b6c.jpg' }} />
            </ScrollView>


            <Text style={styles.categorias}>Posts
                <MaterialIcons name="chevron-right" size={30} color="#000" style={styles.scrollIcon} />
            </Text>
        </View>

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