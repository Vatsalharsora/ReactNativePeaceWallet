import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import MultiSelectButton from '../../components/MultiSelectButton';
import ProgressBar from '../../components/ProgressBar';
import Colors from '../../settings/Colors';



const categories = [
  'Food', 'Drinks', 'Transportation', 'Housing', 'Shopping', 'Health',
  'Fitness', 'Entertainment', 'Kids', 'Cinema', 'Games', 'Education',
  'Debt', 'Loans', 'Savings', 'Investments', 'Travel', 'Gifts',
  'Donations', 'Beauty', 'Taxes',
];

const CategoriesScreen = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      setSelected([...selected, category]);
    }
  };

  const handleNext = () => {
    navigation.navigate('Ready', { category: selected });
  };

  const handleSkip = () => {
    navigation.navigate('Ready');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../../../assets/back.png')} style={styles.backImage} />
      </TouchableOpacity>

       <ProgressBar step={4} totalSteps={5} />
      <Text style={styles.title}>Select Expense Categories</Text>
      <Text style={styles.subtitle}>
        Choose the categories you usually spend on, such as food, transportation, or entertainment.
      </Text>

      <ScrollView contentContainerStyle={styles.options}>
        {categories.map((category) => (
          <MultiSelectButton
            key={category}
            label={category}
            isSelected={selected.includes(category)}
            onPress={() => toggleCategory(category)}
          />
        ))}
      </ScrollView>

       {/* Fixed Bottom Section */}
        <View>
            <Text style={styles.messageText}>You can customize your own categories in the app</Text>
              <View style={styles.bottomRow}>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                  <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                  <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.footerText}>QUESTION 4 OF 5</Text>
        </View>

      
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.white},
  backButton: {marginTop: 20},
  backImage: { width: 24, height: 24 }, // Adjust size based on your image
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: Colors.black },
  subtitle: { color: Colors.gray, marginBottom: 20 },
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
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
    marginBottom: 10,
  },

  messageText: {
    textAlign: 'center',
    color: Colors.grayLight,
    fontSize: 12,
    marginTop:14,
    marginBottom: 20,
  },
});