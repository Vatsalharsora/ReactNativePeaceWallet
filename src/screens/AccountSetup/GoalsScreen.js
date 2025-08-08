// GoalsScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OptionButton from '../../components/OptionButton';
import ProgressBar from '../../components/ProgressBar';
import Colors from '../../settings/Colors';


const goalsOptions = [
  'Monthly savings',
  'Reduce expenses',
  'Planning a big purchase',
  'Investing in the future',
  'Track monthly spending',
  'Billing management',
];

const GoalsScreen = () => {
  const navigation = useNavigation();
  const [selectedGoals, setSelectedGoals] = useState(['Monthly savings']);

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [goal] // Single selection logic
    );
  };

  const handleNext = () => {
    navigation.navigate('Categories', { selectedGoals });
    // if (selectedGoals.length > 0) {
      
    // } else {
    //   alert('Please select at least one goal.');
    // }
  };

  const handleSkip = () => {
    navigation.navigate('Categories');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/back.png')} // Replace with your back icon path
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <ProgressBar step={3} totalSteps={5} />

        <Text style={styles.title}>Select Your Financial Goals</Text>
        <Text style={styles.subtitle}>
          Set your financial goals like saving or cutting expenses, and the app will track your
          progress toward achieving them.
        </Text>

        <View style={styles.buttonContainer}>
          {goalsOptions.map((goal, index) => (
            <View key={index} style={styles.optionWrapper}>
              <OptionButton
                label={goal}
                selected={selectedGoals.includes(goal)}
                onPress={() => toggleGoal(goal)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Bottom Section */}
      <View style={styles.fixedBottom}>
    <Text style={styles.messageText}>You can customize your own goals in the app</Text>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>QUESTION 3 OF 5</Text>
      </View>
    </SafeAreaView>
  );
};

export default GoalsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    marginTop: 40,
    alignSelf: 'flex-start',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.gray,
    marginVertical: 12,
  },
  buttonContainer: {
    marginTop: 10,
  },
  optionWrapper: {
    marginVertical: 5, // Gap between OptionButtons
  },
  fixedBottom: {
    paddingHorizontal: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  skipButton: {
    flex: 1,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: Colors.green,
    borderRadius: 14,
    alignItems: 'center',
  },
  skipText: {
    color: Colors.green,
    fontWeight: '600',
    fontSize: 16,
  },
  nextButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: Colors.green,
    borderRadius: 14,
    alignItems: 'center',
  },
  nextText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    color: Colors.grayLight,
    fontSize: 12,
    marginTop:14,
    marginBottom: 30,
  },

  messageText: {
    textAlign: 'center',
    color: Colors.grayLight,
    fontSize: 12,
    marginTop:14,
    marginBottom: 20,
  },
});