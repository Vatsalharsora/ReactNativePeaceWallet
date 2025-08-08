import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../settings/Colors';


const MultiSelectButton = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isSelected ? styles.selected : styles.unselected]}
    >
      <Text style={[styles.text, isSelected ? styles.selectedText : styles.unselectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginVertical: 6,
    marginRight: 10,
  },
  selected: {
    backgroundColor: Colors.green,
  },
  unselected: {
    backgroundColor: Colors.unselected,
  },
  selectedText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  unselectedText: {
    color: Colors.unselectedText,
  },
  text: {
    fontSize: 14,
  },
});

export default MultiSelectButton;