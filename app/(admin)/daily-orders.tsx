import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyOrders() {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [milkQuantity, setMilkQuantity] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const customers = [
    { id: '1', name: 'John Doe', phone: '1234567890', address: '123 Main St' },
    { id: '2', name: 'Jane Smith', phone: '0987654321', address: '456 Oak Ave' },
    { id: '3', name: 'Mike Johnson', phone: '1122334455', address: '789 Pine Rd' },
    { id: '4', name: 'Sarah Wilson', phone: '5566778899', address: '321 Elm St' },
  ];

  const handleSubmit = async () => {
    if (!selectedCustomer || !milkQuantity) {
      Alert.alert('Missing Fields', 'Please select a customer and enter milk quantity');
      return;
    }

    const quantity = parseFloat(milkQuantity);
    if (isNaN(quantity) || quantity <= 0) {
      Alert.alert('Invalid Quantity', 'Please enter a valid milk quantity');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert('Success', 'Milk order submitted successfully!');
      setSelectedCustomer('');
      setMilkQuantity('');
      setNote('');
    }, 1500);
  };

  const selectedCustomerData = customers.find(c => c.id === selectedCustomer);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Ionicons name="list" size={30} color="#4ade80" />
        <Text style={styles.title}>Daily Milk Orders</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Select Customer</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.customerScroll}>
          {customers.map((customer) => (
            <TouchableOpacity
              key={customer.id}
              style={[
                styles.customerCard,
                selectedCustomer === customer.id && styles.selectedCustomer
              ]}
              onPress={() => setSelectedCustomer(customer.id)}
            >
              <Ionicons name="person" size={20} color={selectedCustomer === customer.id ? "#fff" : "#4ade80"} />
              <Text style={styles.customerName}>{customer.name}</Text>
              <Text style={styles.customerPhone}>{customer.phone}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {selectedCustomerData && (
          <View style={styles.selectedInfo}>
            <Text style={styles.selectedLabel}>Selected Customer:</Text>
            <Text style={styles.selectedName}>{selectedCustomerData.name}</Text>
            <Text style={styles.selectedAddress}>{selectedCustomerData.address}</Text>
          </View>
        )}
        
        <Text style={styles.label}>Milk Quantity (Liters)</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="water" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={milkQuantity}
            onChangeText={setMilkQuantity}
            placeholder="Enter quantity"
            keyboardType="numeric"
            placeholderTextColor="#94a3b8"
          />
        </View>
        
        <Text style={styles.label}>Note (Optional)</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="document-text" size={20} color="#94a3b8" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={note}
            onChangeText={setNote}
            placeholder="Add any special instructions"
            multiline
            numberOfLines={3}
            placeholderTextColor="#94a3b8"
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.submitButton, isSubmitting && styles.submittingButton]} 
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Ionicons name="refresh" size={20} color="#fff" style={styles.spinning} />
              <Text style={styles.submitText}>Submitting...</Text>
            </>
          ) : (
            <>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={styles.submitText}>Submit Order</Text>
            </>
          )}
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  formContainer: {
    gap: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  customerScroll: {
    marginBottom: 10,
  },
  customerCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCustomer: {
    backgroundColor: '#4ade80',
    borderColor: '#4ade80',
  },
  customerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  customerPhone: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
  },
  selectedInfo: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  selectedLabel: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 5,
  },
  selectedName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4ade80',
    marginBottom: 2,
  },
  selectedAddress: {
    fontSize: 14,
    color: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2e3e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  inputIcon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    color: '#fff',
    fontSize: 16,
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
  submittingButton: {
    backgroundColor: '#666',
  },
  spinning: {
    transform: [{ rotate: '360deg' }],
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
