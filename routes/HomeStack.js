import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Details from '../screens/Details'

const HomeStack = () => {
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                title: 'Gazomby Game Zone',
                headerTintColor: '#444',
                headerStyle: { backgroundColor: '#CCC', height: 90 }
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                title: 'Detail Game Zone',
                headerTintColor: '#444',
                headerStyle: { backgroundColor: '#CCC', height: 90 }
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;