import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../../settings/Colors';


const ReadyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon-account.png')} // Add a check icon in your assets folder
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Great! Your Account Is Ready</Text>
      <Text style={styles.subtitle}>
        Thanks for joining us! Now you can start tracking your spending and achieving your financial goals easily and smartly.
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Get started now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReadyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: Colors.grayLight,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: Colors.green,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
  },
  buttonText: { color: Colors.white, fontWeight: '600', fontSize: 16 },
});
