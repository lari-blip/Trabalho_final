import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Serviços' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes do Serviço' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
