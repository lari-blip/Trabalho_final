import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ExploreScreen from '../screens/Explore/ExploreScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import NotificationsScreen from '../screens/Notification/NotificationsScreen';
import PerfilSalao from '../screens/PerfilSalão';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import AgendamentoScreen from '../screens/Agendamento/AgendamentoScreen';
import CartScreen from '../screens/Cart/CartScreen';
import FavoritesScreen from '../screens/Favoritos/FavoriteScreen';
import CategoriaScreen from '../screens/Categorias';
import ServicoDetalhesScreen from '../screens/ServicoDetalhes';
import ServiceDetailScreen from '../screens/ServiceDetail';  // Adicionar esta linha

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e9a0b8',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                    backgroundColor: '#fff',
                },
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={RegisterScreen} />
            <Stack.Screen name="Explorar" component={ExploreScreen} />
            <Stack.Screen name="PerfilSalao" component={PerfilSalao} />
            <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
            <Stack.Screen name="Favoritos" component={FavoritesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Categoria" component={CategoriaScreen} options={{ title: 'Categoria', headerShown: true, headerStyle: { backgroundColor: '#e9a0b8' }, headerTintColor: '#fff' }} />
            <Stack.Screen name="ServicoDetalhes" component={ServicoDetalhesScreen} options={{ title: 'Detalhes do Serviço', headerShown: true, headerStyle: { backgroundColor: '#e9a0b8' }, headerTintColor: '#fff' }} />
            <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Detalhes do Serviço', headerShown: true, headerStyle: { backgroundColor: '#e9a0b8' }, headerTintColor: '#fff' }} />
        </Stack.Navigator>
    );
}
