import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../settings/Colors';



const { width, height } = Dimensions.get('window');

const slides = [
  {
    image: require('../../assets/onboarding1.png'),
    title: 'Manage your money easily',
    subtitle: 'Understand your financial habits and make smart decisions.',
  },
  {
    image: require('../../assets/onboarding2.png'),
    title: 'Achieve your financial goals',
    subtitle: 'Understand your financial habits and make smart decisions.',
  },
  {
    image: require('../../assets/onboarding3.png'),
    title: 'Accurate analysis and reporting',
    subtitle: 'Bring your data together for the right decision every time.',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

 const handleNext = async () => {
  if (activeIndex < slides.length - 1) {
    swiperRef.current.scrollBy(1);
  } else {
    try {
      await AsyncStorage.setItem('hasOnboarded', 'true'); // ✅ Save flag
      navigation.replace('CreateAccount'); // ✅ Now go forward
    } catch (error) {
      console.log('Failed to save onboarding status:', error);
    }
  }
};


  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={false}
        showsPagination={true}
        onIndexChanged={setActiveIndex}
        ref={swiperRef}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={{ position: 'absolute', bottom: height * 0.26 }}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.subtitle}>{slide.subtitle}</Text>
          </View>
        ))}
      </Swiper>

      {/* Conditional bottom buttons */}
      {activeIndex === slides.length - 1 ? (
        <View style={styles.bottomBarCenter}>
          <TouchableOpacity style={styles.buttonFull} onPress={handleNext}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 60,
  },
  image: {
    width: width * 0.7,
    height: height * 0.35,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 20,
    marginBottom: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomBarCenter: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 80,
    alignItems: 'center',
  },
  skip: {
    fontSize: 16,
    color: Colors.green,
  },
  button: {
    backgroundColor: Colors.green,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonFull: {
    backgroundColor: Colors.green,
    paddingVertical: 12,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  dot: {
    backgroundColor: Colors.lightGray,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.green,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

export default OnboardingScreen;
