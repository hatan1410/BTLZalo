import React, {memo, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//import {BaseScreen} from '../../components';

const TimKiemScreen = memo((props: any) => {
  return (
    <View>
      <Text style={styles.baseText}>TimKiemScreen</Text>
    </View>
  );
});
const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default TimKiemScreen;
