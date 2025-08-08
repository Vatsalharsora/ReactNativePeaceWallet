// OptionButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Colors from '../settings/Colors';

export default function OptionButton({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, selected ? styles.selected : styles.unselected]}
      activeOpacity={0.7}
    >
      <View style={[styles.circle, selected && styles.circleSelected]} />
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  selected: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
  },
  unselected: {
    backgroundColor: Colors.unselected,
    borderColor: Colors.unselected,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
    borderWidth: 2,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.unselected,
  },
  circleSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  label: {
    fontSize: 16,
    color: Colors.unselectedText,
    fontWeight: '500',
  },
  labelSelected: {
    color: Colors.white,
  },
});