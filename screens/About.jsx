import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../components/Card'

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>Founded in 1994, GameZone has been working to bring gamers everything there is to know about the games industry, from reviews on the latest game releases to breaking news and rumors.</Text> 
            <Text style={globalStyles.paragraph}>In addition to gaming, we bring relevant culture and entertainment news.</Text>
            <Text style={globalStyles.paragraph}>Contact us: tips@gamezone.com</Text>
        </View>
    );
}

export default About;