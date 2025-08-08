import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import OptionButton from '../../components/OptionButton';
import Colors from '../../settings/Colors';


const currencies = ['INR', 'USD', 'EUR', 'SAR', 'AED', 'QAR', 'KWD', 'DZD'];

export default function CurrencyScreen({ navigation }) {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.toptitle}>Set up your personal account</Text>

      <ProgressBar step={1} />
      <Text style={styles.title}>Set Your Currency</Text>
      <Text style={styles.subtitle}>
        Select the currency you want to use within the app to easily track your expenses and income.
      </Text>

      <FlatList
        data={currencies}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <OptionButton
            label={item}
            selected={selectedCurrency === item}
            onPress={() => setSelectedCurrency(item)}
          />
        )}
        contentContainerStyle={{ gap: 10 }}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Goals')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextButton, { opacity: selectedCurrency ? 1 : 0.6 }]}
          disabled={!selectedCurrency}
          onPress={() => navigation.navigate('Goals')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.questionText}>QUESTION 1 OF 5</Text>
    </View>
  );
}

const { width } = Dimensions.get('window');
const buttonWidth = (width - 60) / 2; // Equal width for both buttons with margin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    marginVertical: 10,
  },
  toptitle: {
    fontSize: 14,
    width:'100%',
    color: Colors.gray,
    textAlign:'center',
    marginTop:25,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    gap: 20,
  },
  skipButton: {
    width: buttonWidth,
    borderWidth: 1.5,
    borderColor: Colors.green,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  skipText: {
    color: Colors.green,
    fontWeight: '600',
    fontSize: 16,
  },
  nextButton: {
    width: buttonWidth,
    backgroundColor: Colors.green,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  questionText: {
    textAlign: 'center',
    color: Colors.grayLight,
    fontSize: 12,
    marginTop: 14,
    marginBottom: 10,
  },
});
