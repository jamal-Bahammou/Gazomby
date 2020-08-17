import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: 'Montserrat-bold',
        fontSize: 18,
        color: '#333'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#3E5858'
    },
    paragraph: {
        fontSize: 15,
        marginVertical: 7,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 6,
        paddingHorizontal: 12,
        fontSize: 15,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 4,
        marginLeft: 6,
        textTransform: 'capitalize'
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
};