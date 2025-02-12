import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyOrders() {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const customers = [
    { id: '1', name: 'John Doe', phone: '1234567890', address: '123 Main St' },
    { id: '2', name: 'Jane Smith', phone: '0987654321', address: '456 Oak Ave' },
    { id: '3', name: 'Mike Johnson', phone: '5555555555', address: '789 Pine Rd' },
  ];

  const handleSubmitOrder = () => {
    if (!selectedCustomer || !quantity) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Order submitted successfully!');
      setSelectedCustomer('');
      setQuantity('');
      setNotes('');
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="list" size={30} color="#4ade80" />
        <Text style={styles.title}>Daily Orders</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Customer Information</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#94a3b8" style={styles.inputIcon} />
          <Text style={styles.label}>Select Customer</Text>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.customerList}>
          {customers.map((customer) => (
            <TouchableOpacity
              key={customer.id}
              style={[
                styles.customerCard,
                selectedCustomer === customer.id && styles.selectedCustomer
              ]}
              onPress={() => setSelectedCustomer(customer.id)}
            >
              <Ionicons name="person-circle" size={24} color="#4ade80" />
              <Text style={styles.customerName}>{customer.name}</Text>
              <Text style={styles.customerPhone}>{customer.phone}</Text>
              <Text style={styles.customerAddress}>{customer.address}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Order Details</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="water" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            placeholder="Quantity (liters)"
            value={quantity}
            onChangeText={setQuantity}
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="document-text" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            placeholder="Notes (optional)"
            value={notes}
            onChangeText={setNotes}
            style={styles.input}
            multiline
            numberOfLines={3}
            placeholderTextColor="#94a3b8"
          />
        </View>

        <TouchableOpacity 
          style={[styles.submitButton, isLoading && styles.disabledButton]} 
          onPress={handleSubmitOrder}
          disabled={isLoading}
        >
          {isLoading ? (
            <Ionicons name="refresh" size={20} color="#fff" />
          ) : (
            <Ionicons name="checkmark" size={20} color="#fff" />
          )}
          <Text style={styles.submitText}>
            {isLoading ? 'Submitting...' : 'Submit Order'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c2b',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  formContainer: {
    gap: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2e3e',
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
  label: {
    flex: 1,
    padding: 15,
    color: '#f1f5f9',
    fontSize: 16,
  },
  customerList: {
    marginBottom: 10,
  },
  customerCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    minWidth: 150,
    borderWidth: 1,
    borderColor: '#334155',
  },
  selectedCustomer: {
    borderColor: '#4ade80',
    backgroundColor: '#1e293b',
  },
  customerName: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  customerPhone: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 2,
  },
  customerAddress: {
    color: '#94a3b8',
    fontSize: 10,
    marginTop: 2,
  },
  submitButton: {
    backgroundColor: '#4ade80',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  disabledButton: {
    opacity: 0.6,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
