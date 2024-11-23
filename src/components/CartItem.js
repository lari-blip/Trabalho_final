import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartItem = ({ itemName, quantity, price }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.itemName}>Manicure</Text>
            <Text style={styles.price}>R$ 50,0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft:15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemName: {
        flex: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    quantity: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    price: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    total: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'right',
    },
});

export default CartItem;
