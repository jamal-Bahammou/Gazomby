import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'

import Card from '../components/Card'

const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ])

    return (
        <View style={globalStyles.container}>

            <MaterialIcons style={styles.modalToggle} name='add' size={24} onPress={() => setModalOpen(true)} />
            <Modal visible={modalOpen} animationType='slide'>
                <View>
                    <MaterialIcons style={{ ...styles.modalToggle, ...styles.modalClose }} name='close' size={24} onPress={() => setModalOpen(false)} />
                    <Text>Hello from the modal 🤑</Text>
                </View>
            </Modal>

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#333',
        padding: 6,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})

export default Home;