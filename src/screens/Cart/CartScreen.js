import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View, Alert } from 'react-native';
import CartItem from '../../components/CartItem';
import { TextInput } from 'react-native-gesture-handler';
import FeedbackCard from '../../components/FeedbackCard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';

const CartScreen = () => {
    const [selectedValue, setSelectedValue] = useState('opcao1');
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(0); // Valor do desconto
    const [couponInput, setCouponInput] = useState(''); // Cupom inserido pelo usuário

    // Exemplos de cupons
    const coupons = [
        { code: 'BELEZA10', percent: 10 },
        { code: 'BELEZA15', percent: 15 },
        { code: 'BELEZA20', percent: 20 },
        { code: 'PRIMEIRACOMPRA', percent: 50 },

    ];

    // Calcula o subtotal
    const calculateSubtotal = () => {
        return cart.reduce((sum, item) => sum + item.price, 0);
    };

    // Calcula o total com desconto
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return Math.max(subtotal - discount, 0); // Garante que o total não seja negativo
    };

    // Função para aplicar o cupom
    const handleApplyCoupon = () => {
        if (cart.length === 0) {
            Alert.alert('Carrinho vazio', 'Adicione itens ao carrinho antes de aplicar um cupom.');
            return;
        }

        const coupon = coupons.find((c) => c.code === couponInput.trim().toUpperCase());
        if (coupon) {
            const newDiscount = (calculateSubtotal() * coupon.percent) / 100;
            setDiscount(newDiscount);
            Alert.alert('Cupom Aplicado!', `Você recebeu ${coupon.percent}% de desconto.`);
        } else {
            Alert.alert('Cupom Inválido', 'O cupom digitado não é válido ou não existe.');
        }
    };

    // Função para adicionar um item ao carrinho
    const handleAddToCart = () => {
        const newItem = {
            id: cart.length + 1,
            name: 'Novo Produto',
            price: 20.0, // Exemplo de preço
        };
        setCart([...cart, newItem]);
    };

    // Função para remover um item do carrinho
    const handleRemoveFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);

        // Zera o desconto se o carrinho estiver vazio
        if (updatedCart.length === 0) {
            setDiscount(0);
        }
    };

    // Efetua o cálculo do desconto sempre que o subtotal mudar
    useEffect(() => {
        // Se houver cupons e o carrinho não estiver vazio, calcula o desconto baseado no subtotal
        if (cart.length > 0 && couponInput) {
            handleApplyCoupon();
        } else {
            setDiscount(0); // Se o carrinho estiver vazio, zera o desconto
        }
    }, [cart]);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.logocontainer}>
                <MaterialCommunityIcons name="cart-variant" size={80} color="black" />
            </View>

            <View style={styles.summaryhead}>
                <Text style={styles.titlesummary}>Resumo</Text>
            </View>

            {/* Lista de itens no carrinho ou mensagem de carrinho vazio */}
            <View>
                {cart.length === 0 ? (
                    <Text style={styles.emptyCartText}>Carrinho vazio!</Text>
                ) : (
                    cart.map((item, index) => (
                        <CartItem
                            key={index}
                            itemName={item.name}
                            price={item.price}
                            onRemove={() => handleRemoveFromCart(index)} // Função para remover o item
                        />
                    ))
                )}
            </View>

            <View style={styles.totalcontainerfather}>
                <View style={styles.totalcontainer1}>
                    <Text style={styles.boxvaluetittle}>Desconto</Text>
                    <Text style={styles.boxvalue}>R$ {discount.toFixed(2)}</Text>
                </View>
                <View style={styles.totalcontainer2}>
                    <Text style={styles.boxvaluetittle}>Total</Text>
                    <Text style={styles.boxvalue}>R$ {calculateTotal().toFixed(2)}</Text>
                </View>
            </View>

            <View style={styles.containercupom}>
                {/* Campo Cupom */}
                <View style={styles.insertcupom}>
                    <TextInput
                        style={styles.inputcupom}
                        placeholder="Coloque o Cupom aqui"
                        placeholderTextColor="#aaa"
                        value={couponInput}
                        onChangeText={setCouponInput}
                    />
                    <TouchableOpacity style={styles.buttonCupom} onPress={handleApplyCoupon}>
                        <Text style={styles.buttonCupomText}>Aplicar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.methodcontainer}>
                <Text style={styles.titlesummary}>Selecione uma opção:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.inputmetodo}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
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

          

            {/* Botão Add to Cart */}
            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    titlesummary: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
        marginRight: 10,
    },
    summaryhead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 0,

    },
    button: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
    containercupom: {
        marginTop: 25,
    },
    insertcupom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputcupom: {
        height: 40,
        width: 265,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        color: '#000',
    },
    buttonCupom: {
        backgroundColor: '#F2AA7D',
        paddingVertical: 10,
        borderRadius: 5,
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCupomText: {
        color: '#fff',
        fontSize: 15,
    },
    methodcontainer: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    totalcontainerfather: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    totalcontainer1: {
        height: 80,
        width: 170,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 10,
    },
    totalcontainer2: {
        height: 80,
        width: 170,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 10,
    },
    boxvaluetittle: {
        fontSize: 13,
        fontWeight: '400',
    },
    boxvalue: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    finishContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonFinish: {
        backgroundColor: '#F2AA7D',
        height: 50,
        width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonFinishText: {
        color: '#fff',
        fontSize: 22,
    },
    feedbacksScroll: {
        marginVertical: 20,
    },
    logocontainer: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 10,

    },
    addButtonContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    addButton: {
        backgroundColor: '#F2AA7D',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyCartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#999',
        textAlign: 'center',
        marginVertical: 20,
            },


        });

        export default CartScreen;