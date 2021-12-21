import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from 'react-native'

import {
    Ionicons,
    MaterialCommunityIcons,
    AntDesign
    
} from 'react-native-vector-icons'

const InputMessage = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn("sending: ", message);

        setMessage('');
    }


    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={70}
        >
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="sticker-emoji" size={24} style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Message..."
                    placeholderTextColor="lightgrey"
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                    style={styles.inputBox}
                />
                <TouchableOpacity>
                    <MaterialCommunityIcons name="microphone-outline" size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Pressable onPress={sendMessage} style={styles.buttonContainer}>
               <Ionicons name="send" size={20} color='blue' />
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    icon: {
        color: '#595959'
    },
    inputBox: {
        flex: 1,
        marginHorizontal: 5,
        // borderColor: 'black',
        // borderWidth: 1
    },
    buttonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3777f0'
    }
})

export default InputMessage

