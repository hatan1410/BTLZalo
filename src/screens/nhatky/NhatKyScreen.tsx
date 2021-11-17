import React, {memo, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BaseScreen from '../../components/BaseScreen';

const NhatKyScreen = memo((props: any) => {
  return (
    <BaseScreen>
      <Text style={styles.baseText}>NhatKyScreen</Text>
    </BaseScreen>
  );
});
const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default NhatKyScreen;
