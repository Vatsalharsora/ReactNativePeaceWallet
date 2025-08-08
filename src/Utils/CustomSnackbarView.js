import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Platform, StatusBar } from 'react-native';
import Colors from '../settings/Colors';


const { width } = Dimensions.get('window');

const CustomSnackbarView = ({ message, type }) => {
  const backgroundColor = type === 1 ? Colors.success : Colors.error; // green or red

  return (
    <View style={[styles.container, { backgroundColor, top: 5 }]}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.icon}
        resizeMode="cover"
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 9999,
    elevation: 0,
    width:'100%',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: Colors.white,
  },
  message: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
    flexShrink: 1,
  },
});

export default CustomSnackbarView;
