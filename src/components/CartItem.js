import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CartItem = ({ itemName, price, onRemove }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
            <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
                <MaterialCommunityIcons name="close" size={24} color="#FF0000" />
            </TouchableOpacity>
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
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemName: {
        flex: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    removeButton: {
        marginLeft: 10,
    },
});

export default CartItem;
