import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image
} from 'react-native';
import moment from 'moment'

export default function MessageItem({ roomchat }) {

    const user = roomchat.users[1];

    const navigation = useNavigation();

    const onPressHandle = () => {
        
        navigation.navigate('MessageDetailScreen', { id: roomchat.id });
    }

    const time = moment(roomchat.lastMessage?.createdAt).from(moment());

    return (
        <Pressable onPress={onPressHandle} style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    source={{ uri: user.imageUri }}
                    style={styles.image}
                />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.time}>{time}</Text>
                </View>
                <Text numberOfLines={1} style={[styles.message, { color: roomchat.numNewMessage>0 ? '#3777f0' : 'gray' }]}>{roomchat.lastMessage.message}</Text>
            </View>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    avatar: {
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    badgeContainer: {
        backgroundColor: '#3777f0',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 45
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    name: {
        flex: 2,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
    time: {
        flex: 1,
        textAlign: 'right',
        color: 'grey',
        justifyContent: 'center',
    },
    message: {
    }
});
