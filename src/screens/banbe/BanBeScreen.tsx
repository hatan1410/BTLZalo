import React, {memo, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BaseScreen from '../../components/BaseScreen';

const BanBeScreen = memo((props: any) => {
  return (
    <BaseScreen>
      <Text style={styles.baseText}>BanBeScreen</Text>
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
export default BanBeScreen;
