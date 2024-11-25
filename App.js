import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import NetInfo from '@react-native-community/netinfo';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ThemeProvider } from './src/contexts/ThemeContext';


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

        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    const handleRetry = () => {

        NetInfo.fetch().then((state) => {
            setIsConnected(state.isConnected);
        });
    };

    if (!isConnected) {
        return <NoInternetScreen onRetry={handleRetry} />;
    }

    return (
        <ThemeProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </ThemeProvider>
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
