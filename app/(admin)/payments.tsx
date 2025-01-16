import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Payments() {
  const [selectedMonth, setSelectedMonth] = useState('January 2025');

  const paymentData = [
    { customer: 'John Doe', liters: 45.5, amount: 2275, status: 'Paid' },
    { customer: 'Jane Smith', liters: 38.0, amount: 1900, status: 'Pending' },
    { customer: 'Mike Johnson', liters: 52.5, amount: 2625, status: 'Paid' },
    { customer: 'Sarah Wilson', liters: 41.0, amount: 2050, status: 'Pending' },
  ];

  const totalRevenue = paymentData.reduce((sum, item) => sum + item.amount, 0);
  const pendingAmount = paymentData
    .filter(item => item.status === 'Pending')
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment Reports</Text>
      
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Revenue</Text>
          <Text style={styles.summaryValue}>₹{totalRevenue}</Text>
        </View>
        
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Pending Amount</Text>
          <Text style={styles.summaryValue}>₹{pendingAmount}</Text>
        </View>
      </View>
      
      <View style={styles.monthSelector}>
        <Text style={styles.monthText}>{selectedMonth}</Text>
      </View>
      
      <View style={styles.paymentList}>
        {paymentData.map((item, index) => (
          <View key={index} style={styles.paymentCard}>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>{item.customer}</Text>
              <Text style={styles.customerDetails}>
                {item.liters}L • ₹{item.amount}
              </Text>
            </View>
            
            <View style={[
              styles.statusBadge,
              item.status === 'Paid' ? styles.paidBadge : styles.pendingBadge
            ]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        ))}
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
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ade80',
  },
  monthSelector: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  paymentList: {
    gap: 10,
  },
  paymentCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  customerDetails: {
    fontSize: 14,
    color: '#aaa',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  paidBadge: {
    backgroundColor: '#10b981',
  },
  pendingBadge: {
    backgroundColor: '#f59e0b',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});
