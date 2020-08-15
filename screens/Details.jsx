import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'

const Details = ({ navigation, route }) => {
    
    const { body, rating, title } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Text>{ rating }</Text>
        </View>
    );
}

export default Details;