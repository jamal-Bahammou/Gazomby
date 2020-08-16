import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#eee',
        letterSpacing: 1
    },
    icon: {
        color: '#eee',
        position: 'absolute',
        left: 0
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 10
    }
})

export default Header;