import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import showCustomSnackbar from '../Utils/showCustomSnackbar';
import Colors from '../settings/Colors';


const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const isNameTaken = name.trim().toLowerCase() === 'mohamed';
  const isEmailValid = email.includes('@') && email.includes('.');
  const isPasswordValid = password.length >= 6;

  const handleSignUp = () => {
    if (!name.trim()) {
      showCustomSnackbar('Please enter your full name.', 0);
    } else if (isNameTaken) {
      showCustomSnackbar('Username already taken. Try Medk129', 0);
    } else if (!isEmailValid) {
      showCustomSnackbar('Please enter your valid email.', 0);
    } else if (!isPasswordValid) {
      showCustomSnackbar('Password must be at least 6 characters.', 0);
    } else {
      showCustomSnackbar('Account created successfully!', 1);
      navigation.navigate('Currency');
    }
  };

  return (
  <View style={{ flex: 1, backgroundColor: "#fff" }}>
    <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign Up to get started buddy</Text>

      {/* Full Name Input */}
      <View
        style={[
          styles.inputWrapper,
          (!name.trim() || isNameTaken) && styles.inputErrorBorder,
        ]}
      >
        <Image source={require('../../assets/icon-user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={Colors.hint}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View
        style={[
          styles.inputWrapper,
          email.length > 0 && (isEmailValid ? styles.inputValidBorder : styles.inputErrorBorder),
        ]}
      >
        <Image source={require('../../assets/icon-email.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor={Colors.hint}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View
        style={[
          styles.inputWrapper,
          password.length > 0 &&
            (isPasswordValid ? styles.inputValidBorder : styles.inputErrorBorder),
        ]}
      >
        <Image source={require('../../assets/icon-lock.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Colors.hint}
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Image
            source={
              secureText
                ? require('../../assets/icon-eye-off.png')
                : require('../../assets/icon-eye-show.png')
            }
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp} activeOpacity={1}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <FlashMessage position="top" />
    </ScrollView>

    {/* Footer Section: Social Buttons + Login Link */}
    <View style={styles.bottomSection}>
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.dividerLine} />
      </View>

      <TouchableOpacity style={styles.socialButton} activeOpacity={1}>
        <Image source={require('../../assets/icon-google.png')} style={styles.socialIcon} />
        <Text style={styles.socialText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { marginTop: 12 , marginBottom:100}]} activeOpacity={1}>
        <Image source={require('../../assets/icon-facebook.png')} style={styles.socialIcon} />
        <Text style={styles.socialText}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>
          Already got an account?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  </View>
);

};

const styles = StyleSheet.create({
  bottomSection: {
  padding: 20,
  backgroundColor: Colors.white,
},
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 80,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 50,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  inputErrorBorder: {
    borderColor: Colors.red,
  },
  inputValidBorder: {
    borderColor: Colors.green,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  iconRight: {
    width: 20,
    height: 20,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
    paddingVertical: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
  forgotPasswordText: {
    color: Colors.gray,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  signupButton: {
    backgroundColor: Colors.green,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 40,
  },
  signupButtonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderColor,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 13,
    color: Colors.gray,
  },
  socialButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    resizeMode: 'contain',
  },
  socialText: {
    fontSize: 14,
    color: Colors.text,
  },
  loginRow: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    position:'absolute',
    bottom:25,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 13,
    color: Colors.gray,
  },
  loginLink: {
    fontWeight: '600',
    color: Colors.text,
  },
});

export default CreateAccountScreen;
