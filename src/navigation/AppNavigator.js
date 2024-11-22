import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';  // Importando os ícones
import ExploreScreen from '../screens/Explore/ExploreScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import NotificationsScreen from '../screens/Notification/NotificationsScreen';
import PerfilSalao from '../screens/PerfilSalão';
import LoginScreen from '../screens/Login/LoginScreen';
import AgendamentoScreen from '../screens/Agendamento/AgendamentoScreen';

import RegisterScreen from '../screens/Cadastro/RegisterScreen';
import CartScreen from '../screens/Cart/CartScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e9a0b8',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="log-in" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, // Oculta o cabeçalho do Stack.Navigator
        }}>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={RegisterScreen} />
            <Stack.Screen name="Explorar" component={ExploreScreen} />
            <Stack.Screen name="PerfilSalao" component={PerfilSalao} />
            <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
        </Stack.Navigator>
    );
}