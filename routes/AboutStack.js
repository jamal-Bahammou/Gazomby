import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import About from '../screens/About'
import Header from '../components/Header'

const AboutStack = () => {
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerTitle: () => <Header  title='About Gazomby' />,
                    headerStyle: { backgroundColor: '#3E5858', height: 90 }
                }}
            />
        </Stack.Navigator>
    );
}

export default AboutStack;