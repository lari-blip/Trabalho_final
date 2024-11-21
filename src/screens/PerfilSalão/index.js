import React from 'react';
import { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";

export default function PerfilSalao() {
    const navigation = useNavigation();
    const [cont, setCont] = useState(155)

    const handleAgendar = () => {
        navigation.navigate('Agendamento', {
            profileImage: 'https://i.imgur.com/LMaopsx.jpeg',
            profileName: 'Beleza Total',
        });
    };

    const incrementar = () => setCont(cont + 1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.imgur.com/LMaopsx.jpeg' }}
                    style={styles.image}
                />
            </View>

            <Text style={styles.title}>Beleza Total</Text>

            <View style={styles.status}>
                <View>
                    <Text style={styles.numero}>{cont}</Text>
                    <Text style={styles.texto}>Seguidores</Text>
                </View>
                <View>
                    <Text style={styles.numero}>55</Text>
                    <Text style={styles.texto}>Seguindo</Text>
                </View>
                <View>
                    <Text style={styles.numero}>100</Text>
                    <Text style={styles.texto}>Serviços</Text>
                </View>
            </View>

            <View style={styles.button}>
                <MaterialIcons name="favorite" color="red" size={25} />

                <TouchableOpacity
                    style={styles.buttonSeguir}
                    onPress={incrementar}>
                    <Text style={styles.buttonText}>Seguir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonAguendar}
                    onPress={handleAgendar}
                >
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
            </ScrollView>


            <Text style={styles.categorias}>Posts
                <MaterialIcons name="chevron-right" size={30} color="#000" style={styles.scrollIcon} />
            </Text>
        </View>

    );
}
