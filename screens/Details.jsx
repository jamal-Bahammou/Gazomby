import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'

import Card from '../components/Card'

const Details = ({ navigation, route }) => {
    
    const { body, rating, title } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.title}>{ title }</Text>
                <Text style={globalStyles.paragraph}>{ body }</Text>
                <View style={styles.rating}>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})

export default Details;