import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ExploreScreen from '../screens/Explore/ExploreScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import NotificationsScreen from '../screens/Notification/NotificationsScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'
function MainTabs() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
                <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registrar" component={RegistrarScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}