import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'

import Card from '../components/Card'
import ReviewForm from '../screens/ReviewForm'

const Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Counter-Strike', rating: 5, body: "Counter-Strike (CS) is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror (bombing, hostage-taking, assassination) while counter-terrorists try to prevent it (bomb defusal, hostage rescue). The series began on Windows in 1999 with the release of the first game, Counter-Strike. It was initially released as a modification for Half-Life that was designed by Minh 'Gooseman' Le and Jess Cliffe before the rights to the mod's intellectual property were acquired by Valve, the developers of Half-Life, who then turned Counter-Strike into a retail product.", key: '3' },
        { title: 'Fortnite', rating: 4, body: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build.", key: '1' },
        { title: 'PUBG', rating: 3, body: "PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. The game is based on previous mods that were created by Brendan, Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round.", key: '2' },
        { title: 'San Andreas', rating: 4, body: "Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh title in the Grand Theft Auto series, and the follow-up to the 2002 game Grand Theft Auto: Vice City. It was released in October 2004 for PlayStation 2, and in June 2005 for Microsoft Windows and Xbox.", key: '4' }
    ])

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews( currentReviews => [ review, ...currentReviews ] );
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>

            <MaterialIcons style={styles.modalToggle} name='add' size={24} onPress={() => setModalOpen(true)} />
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons style={{ ...styles.modalToggle, ...styles.modalClose }} name='close' size={24} onPress={() => setModalOpen(false)} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
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
    },
    modalContent: {
        flex: 1,
    }
})

export default Home;