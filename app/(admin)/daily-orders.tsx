import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function DailyOrders() {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [milkQuantity, setMilkQuantity] = useState('');
  const [note, setNote] = useState('');

  const customers = [
    { id: '1', name: 'John Doe', phone: '1234567890' },
    { id: '2', name: 'Jane Smith', phone: '0987654321' },
    { id: '3', name: 'Mike Johnson', phone: '1122334455' },
  ];

  const handleSubmit = () => {
    if (!selectedCustomer || !milkQuantity) {
      alert('Please fill all required fields');
      return;
    }
    alert('Order submitted successfully!');
    setSelectedCustomer('');
    setMilkQuantity('');
    setNote('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Milk Orders</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Select Customer</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {customers.map((customer) => (
            <TouchableOpacity
              key={customer.id}
              style={[
                styles.customerCard,
                selectedCustomer === customer.id && styles.selectedCustomer
              ]}
              onPress={() => setSelectedCustomer(customer.id)}
            >
              <Text style={styles.customerName}>{customer.name}</Text>
              <Text style={styles.customerPhone}>{customer.phone}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <Text style={styles.label}>Milk Quantity (Liters)</Text>
        <TextInput
          style={styles.input}
          value={milkQuantity}
          onChangeText={setMilkQuantity}
          placeholder="Enter quantity"
          keyboardType="numeric"
        />
        
        <Text style={styles.label}>Note (Optional)</Text>
        <TextInput
          style={styles.input}
          value={note}
          onChangeText={setNote}
          placeholder="Add any special instructions"
          multiline
        />
        
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Order</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
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
  customerCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  selectedCustomer: {
    backgroundColor: '#4ade80',
  },
  customerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  customerPhone: {
    fontSize: 12,
    color: '#aaa',
  },
  input: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 8,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#444',
  },
  submitButton: {
    backgroundColor: '#4ade80',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
