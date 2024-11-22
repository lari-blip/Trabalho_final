import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import CartItem from '../../components/CartItem';
import { TextInput } from 'react-native-gesture-handler';
import FeedbackCard from '../../components/FeedbackCard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';

const App = () => {

    const [selectedValue, setSelectedValue] = useState('opcao1');
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.logocontainer}>
                <MaterialCommunityIcons name="cart-variant" size={80} color="black" />
            </View>

            <View style={styles.summaryhead}>
                <Text style={styles.titlesummary}>Resumo</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <CartItem />
                <CartItem />
            </View>

            <View style={styles.totalcontainerfather}>
                <View style={styles.totalcontainer1}>
                    <Text style={styles.boxvaluetittle}>Desconto</Text>
                    <Text style={styles.boxvalue}>R$ 15,00</Text>
                </View>
                <View style={styles.totalcontainer2}>
                    <Text style={styles.boxvaluetittle}>Total</Text>
                    <Text style={styles.boxvalue}>R$ 85,00</Text>
                </View>
            </View>


            <View style={styles.containercupom}>
                {/* Campo Cupom */}

                <View style={styles.insertcupom}>
                    <TextInput
                        style={styles.inputcupom}
                        placeholder="Coloque o Cupom aqui"
                        placeholderTextColor="#aaa"
                    />

                    <TouchableOpacity style={styles.buttonCupom}>
                        <Text style={styles.buttonCupomText}>Aplicar</Text>
                    </TouchableOpacity>
                </View>


            </View>


            <View style={styles.methodcontainer}>
                <Text style={styles.titlesummary}>Selecione uma opção:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.inputmetodo}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Pix" value="opcao1" />
                    <Picker.Item label="Pagar no Salão" value="opcao2" />
                    <Picker.Item label="Boleto" value="opcao3" />
                </Picker>

            </View>


            <View style={styles.finishContainer}>
                <TouchableOpacity style={styles.buttonFinish}>
                    <Text style={styles.buttonFinishText}>Finalizar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal // Ativa o scroll horizontal
                showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
                style={styles.feedbacksScroll}>
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </ScrollView>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        container: {
            flex: 1,
            padding: 16,
        },
    },

    titlesummary: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
        marginRight: 10,
    },

    summaryhead: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'light',
        color: '#000',
    },

    containercupom: {
        flex: 1,
        paddingTop: 25,
        paddingRight: 16,
        paddingLeft: 16,
    },

    insertcupom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 4
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    inputcupom: {
        height: 40,
        width: 265,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 1,
        backgroundColor: '#f9f9f9',
        color: '#000',
    },

    pickermetodo: {
        height: 60,
        width: 250,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },

    buttonCupom: {
        backgroundColor: '#F2AA7D',
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 2,
        height: 40,
        width: 80,
    },

    buttonCupomText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,

    },
    methodcontainer: {
        flex: 1,
        padding: 16,
    },

    totalcontainerfather: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    totalcontainer1: {
        height: 80,
        width: 170,
        marginTop: 30,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
    },

    totalcontainer2: {
        height: 80,
        width: 170,
        marginTop: 30,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
    },

    boxvaluetittle: {
        fontSize: 13,
        margin: 10,
        fontWeight: 'light',
    },
    boxvalue: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    finishContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttonFinish: {

        backgroundColor: '#F2AA7D',
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 2,
        height: 50,
        width: 360,
        alignItems: 'center',
    },
    buttonFinishText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,

    },

    feedbacksScroll: {
        marginVertical: 20,
    },

    logocontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
    },
});

export default App;
