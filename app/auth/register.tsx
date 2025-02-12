import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !phone || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    // Simulate registration
    Alert.alert('Success', 'Registration successful! Please login.', [
      {
        text: 'OK',
        onPress: () => router.push('/auth/customer-login'),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Ionicons name="person-add" size={60} color="#10b981" />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join our milk delivery service</Text>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#94a3b8"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Ionicons name="call" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="phone-pad"
            placeholderTextColor="#94a3b8"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholderTextColor="#94a3b8"
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={20} 
              color="#94a3b8" 
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
            placeholderTextColor="#94a3b8"
          />
          <TouchableOpacity 
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons 
              name={showConfirmPassword ? "eye-off" : "eye"} 
              size={20} 
              color="#94a3b8" 
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Create Account</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.loginLink} 
          onPress={() => router.push('/auth/customer-login')}
        >
          <Text style={styles.loginLinkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginTop: 15,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  formContainer: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  inputIcon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    color: '#f1f5f9',
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  registerButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginLinkText: {
    color: '#10b981',
    fontSize: 16,
  },
});
