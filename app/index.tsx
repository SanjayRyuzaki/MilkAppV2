import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const handleAdminLogin = () => {
    try {
      // Bug: Incorrect route path causing navigation failure
      router.push('/auth/admin-login-broken');
    } catch (error) {
      Alert.alert('Navigation Error', 'Failed to navigate to admin login');
    }
  };

  const handleCustomerLogin = () => {
    try {
      // Bug: Missing route causing navigation to fail
      router.push('/auth/customer-login-missing');
    } catch (error) {
      Alert.alert('Navigation Error', 'Failed to navigate to customer login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="water" size={40} color="#4ade80" />
        <Text style={styles.title}>Milk Delivery App</Text>
        <Text style={styles.subtitle}>Fresh milk, delivered daily</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleAdminLogin}
        >
          <Ionicons name="person" size={24} color="#fff" />
          <Text style={styles.buttonText}>Admin Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.customerButton]}
          onPress={handleCustomerLogin}
        >
          <Ionicons name="people" size={24} color="#fff" />
          <Text style={styles.buttonText}>Customer Login</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.features}>
        <View style={styles.feature}>
          <Ionicons name="time" size={20} color="#4ade80" />
          <Text style={styles.featureText}>Daily Delivery</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="shield-checkmark" size={20} color="#4ade80" />
          <Text style={styles.featureText}>Quality Assured</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="card" size={20} color="#4ade80" />
          <Text style={styles.featureText}>Easy Payments</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginTop: 15,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  buttonContainer: {
    gap: 15,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#1e293b',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  customerButton: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feature: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});
