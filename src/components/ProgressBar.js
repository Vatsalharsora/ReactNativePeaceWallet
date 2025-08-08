import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../settings/Colors';

export default function ProgressBar({ step }) {
  const progress = (step / 5) * 100;

  return (
    <View style={styles.wrapper}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 10,
    backgroundColor: Colors.grayLight,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 20,
  },
  bar: {
    height: 10,
    backgroundColor:Colors.green,
  },
});
