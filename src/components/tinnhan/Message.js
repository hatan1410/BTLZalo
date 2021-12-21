import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

// myID 

export default function Message({ messages }) {

    const me = messages.user.id === myID;

    return (
        <View style={[styles.container, me ? styles.rightContainer : styles.leftContainer]}>
            <Text style={{ color: 'black' }}>{messages.content}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: '#66ccff',
        marginLeft: 'auto',
        marginRight: 10
    }
})