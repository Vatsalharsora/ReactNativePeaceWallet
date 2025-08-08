import React, { useEffect } from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    let timeout;

    const checkOnboardingStatus = async () => {
      try {
        const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');

        timeout = setTimeout(() => {
          if (hasOnboarded === 'true') {
            navigation.replace('CreateAccount');
          } else {
            navigation.replace('Onboarding');
          }
        }, 2000); // splash delay (2 seconds)
      } catch (error) {
        console.log('Error checking onboarding status:', error);
        navigation.replace('Onboarding');
      }
    };

    checkOnboardingStatus();

    return () => {
      if (timeout) clearTimeout(timeout); // Clean up on unmount
    };
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/bg-peace-wallet.png')}
          style={[styles.background, { width, height }]}
          resizeMode="cover"
        >
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/peace-wallet-logo.png')}
              style={[styles.logo, { width: width * 0.5, height: width * 0.5 }]}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
