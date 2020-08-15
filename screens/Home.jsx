import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home sceen</Text>
            <Button title='details' onPress={() => navigation.navigate('Details')} />
        </View>
    );
}

export default Home;