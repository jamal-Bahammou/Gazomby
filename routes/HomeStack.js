import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Details from '../screens/Details'
import Header from '../components/Header'

const HomeStack = () => {
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                headerTitle: () => <Header title='Gazomby Game Zone' />,
                headerStyle: { backgroundColor: '#3E5858', height: 90 }
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                title: 'Detail Game Zone',
                headerTintColor: '#eee',
                headerStyle: { backgroundColor: '#3E5858', height: 90 }
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;