import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';


export default function NameTips(props) {
  return (
    <View>
      <View style={styles.container}>
        <Text>Naming tips:</Text>
          <View>
          <View><Text style={styles.tip_item}>Names must not violate Zalo's Naming policy </Text></View>
          <View><Text style={styles.tip_item}>Help your friends recognize you by using your real name</Text></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  tip_item: {
    marginTop: 4,
    marginBottom: 4
  }
});
