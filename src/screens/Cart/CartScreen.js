import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View, Alert } from 'react-native';
import CartItem from '../../components/CartItem';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { api } from '../../services/index';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';

const CartScreen = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [selectedValue, setSelectedValue] = useState('opcao1');
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [couponInput, setCouponInput] = useState('');

    const coupons = [
        { code: 'BELEZA10', percent: 10 },
        { code: 'BELEZA15', percent: 15 },
        { code: 'BELEZA20', percent: 20 },
        { code: 'PRIMEIRACOMPRA', percent: 50 },
    ];

    const fetchCartData = async () => {
        try {
            const response = await api.get('/');
            const data = response.data.map((item) => ({
                ...item,
                quantity: item.quantity || 1,
            }));
            setCart(data);
        } catch (error) {
            console.error('Erro ao buscar carrinho:', error.response?.data || error.message);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchCartData();
        }, [])
    );
    const calculateSubtotal = () => {
        return cart.reduce((sum, item) => sum + item.preco * item.quantity, 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return Math.max(subtotal - discount, 0);
    };

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

        setCouponInput('');
    };

    const handleAddToCart = async () => {
        const newItem = {
            produto: 'Novo Produto',
            preco: 20.0,
            quantity: 1,
        };

        try {
            await api.post('/', newItem);
            await fetchCartData();
        } catch (error) {
            console.error('Erro ao adicionar item:', error.response?.data || error.message);
            Alert.alert('Erro ao adicionar', 'Não foi possível adicionar o item.');
        }
    };

    const handleRemoveFromCart = async (item) => {
        try {
            await api.delete(`/${item.id}`);
            await fetchCartData();
        } catch (error) {
            console.error('Erro ao remover item:', error.response?.data || error.message);
        }
    };

    const handleFinalizePurchase = async () => {
        try {
            const response = await api.get('/');
            const cartItems = response.data;

            await Promise.all(
                cartItems.map(async (item) => {
                    await api.delete(`/${item.id}`);
                })
            );

            setCart([]);
            setDiscount(0);
            Alert.alert('Compra Finalizada', 'Obrigado pela sua compra!');
        } catch (error) {
            console.error('Erro ao finalizar a compra:', error.response?.data || error.message);
            Alert.alert('Erro ao finalizar compra', 'Ocorreu um erro ao tentar finalizar a compra. Tente novamente.');
        }
    };

    return (
        <ScrollView contentContainerStyle={[styles.scrollContainer, { backgroundColor: isDark ? '#121212' : '#f5f5f5' }]}>
            <View style={styles.logocontainer}>
                <MaterialCommunityIcons name="cart-variant" size={80} color={isDark ? '#fff' : '#000'} />
            </View>

            <View style={styles.summaryhead}>
                <Text style={[styles.titlesummary, { color: isDark ? '#fff' : '#333' }]}>Resumo</Text>
            </View>

            <View>
                {cart.length === 0 ? (
                    <Text style={[styles.emptyCartText, { color: isDark ? '#fff' : '#999' }]}>Carrinho vazio!</Text>
                ) : (
                    cart.map((item) => (
                        <CartItem
                            key={item.id}
                            itemName={item.produto}
                            price={item.preco}
                            onRemove={() => handleRemoveFromCart(item)}
                        />
                    ))
                )}
            </View>

            <View style={styles.totalcontainerfather}>
                <View style={[styles.totalcontainer1, { backgroundColor: isDark ? '#333' : '#fff' }]}>
                    <Text style={[styles.boxvaluetittle, { color: isDark ? '#fff' : '#333' }]}>Desconto</Text>
                    <Text style={[styles.boxvalue, { color: isDark ? '#fff' : '#333' }]}>R$ {discount.toFixed(2)}</Text>
                </View>
                <View style={[styles.totalcontainer2, { backgroundColor: isDark ? '#333' : '#fff' }]}>
                    <Text style={[styles.boxvaluetittle, { color: isDark ? '#fff' : '#333' }]}>Total</Text>
                    <Text style={[styles.boxvalue, { color: isDark ? '#fff' : '#333' }]}>R$ {calculateTotal().toFixed(2)}</Text>
                </View>
            </View>

            <View style={styles.containercupom}>
                <View style={styles.insertcupom}>
                    <TextInput
                        style={[styles.inputcupom, { backgroundColor: isDark ? '#333' : '#f9f9f9', color: isDark ? '#fff' : '#000' }]}
                        placeholder="Coloque o Cupom aqui"
                        placeholderTextColor={isDark ? '#bbb' : '#aaa'}
                        value={couponInput}
                        onChangeText={setCouponInput}
                    />
                    <TouchableOpacity style={[styles.buttonCupom, { backgroundColor: isDark ? '#e9a0b8' : '#F2AA7D' }]} onPress={handleApplyCoupon}>
                        <Text style={styles.buttonCupomText}>Aplicar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.methodcontainer}>
                <Text style={[styles.titlesummary, { color: isDark ? '#fff' : '#333' }]}>Selecione uma opção:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={[styles.inputmetodo, { color: isDark ? '#fff' : '#000' }]}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Pix" value="opcao1" />
                    <Picker.Item label="Pagar no Salão" value="opcao2" />
                    <Picker.Item label="Boleto" value="opcao3" />
                </Picker>
            </View>

            <View style={styles.finishContainer}>
                <TouchableOpacity style={[styles.buttonFinish, { backgroundColor: isDark ? '#e9a0b8' : '#F2AA7D' }]} onPress={handleFinalizePurchase}>
                    <Text style={styles.buttonFinishText}>Finalizar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={[styles.addButton, { backgroundColor: isDark ? '#e9a0b8' : '#F2AA7D' }]} onPress={fetchCartData}>
                    <Text style={styles.addButtonText}>Atualizar Carrinho</Text>
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
