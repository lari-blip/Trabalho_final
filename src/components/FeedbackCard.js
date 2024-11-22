import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const FeedbackCard = ({ itemName, quantity, price }) => {

    return (
        <View style={styles.container}>
            <View style={styles.usercontainer}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
                <Text style={styles.usernameText}>Amanda</Text>
            </View>

            <View style={styles.usermessage}>
                <Text style={styles.usermessageText}>Muito Bom o atendimento! Já quero voltar.</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
        marginBottom: 30,
        marginLeft: 16,

        flex: 1,
        backgroundColor: '#f9f9f9',
        width: 280,
        borderRadius: 8,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    usercontainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,

    },
    usermessage: {

        paddingLeft: 15,
        paddingBottom:20,
    },
    usernameText: {
        marginLeft: 10,
    },

    usermessageText: {
        fontSize: 14,
        textAlign: 'left',
        color: '#555',
        marginHorizontal: 10, // Adiciona espaço nas laterais
    },


});

export default FeedbackCard;
