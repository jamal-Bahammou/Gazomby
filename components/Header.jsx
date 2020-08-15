import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} />
            <View>
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
        justifyContent: 'center',
        alignItems: 'center'
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
        left: 16
    }
})

export default Header;