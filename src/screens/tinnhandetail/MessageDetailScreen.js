import React from 'react'
import Message from '../../components/tinnhan/Message'
import InputMessage from '../../components/tinnhan/InputMessage'
export default function MessageDetailScreen() {

    const route = useRoute();
    let messageContent = null;
    const id_room = route.params?.id;
    {
        if (id_room) {
            ChatData.map((item) => {
                if (item.id === id_room) {
                    messageContent = item.messages;
                }
            })
        }
    }

    return (
        <SafeAreaView style={styles.page} >
            {/* <HeaderMessageDetail /> */}
            <FlatList
                data={messageContent}
                renderItem={({ item }) => <Message messages={item} />}
                inverted
            />
            <InputMessage />
        </SafeAreaView >
    );

    const styles = StyleSheet.create({
        page: {
            backgroundColor: 'white',
            flex: 1,
        }
    });
}