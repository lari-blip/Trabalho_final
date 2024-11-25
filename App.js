import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import NetInfo from '@react-native-community/netinfo';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const NoInternetScreen = ({ onRetry }) => (
    <View style={styles.noInternetContainer}>
        <Text style={styles.noInternetText}>Sem conexão com a internet.</Text>
        <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
            <Text style={styles.retryButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
    </View>
);

export default function App() {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        // Verifica o status da conexão com a internet
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        return () => unsubscribe(); // Limpa o listener quando o componente é desmontado
    }, []);

    const handleRetry = () => {
        // Tenta verificar novamente a conexão
        NetInfo.fetch().then((state) => {
            setIsConnected(state.isConnected);
        });
    };

    if (!isConnected) {
        return <NoInternetScreen onRetry={handleRetry} />;
    }

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    noInternetContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    noInternetText: {
        fontSize: 18,
        marginBottom: 20,
    },
    retryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F2AA7D',
        borderRadius: 5,
    },
    retryButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
