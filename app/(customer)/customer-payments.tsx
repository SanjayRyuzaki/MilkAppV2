import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function CustomerPayments() {
  const [customerName] = useState('John Doe');
  const [totalLiters, setTotalLiters] = useState(45.5);
  const [amountDue, setAmountDue] = useState(2275);
  const [lastPayment, setLastPayment] = useState('2025-01-15');

  const paymentHistory = [
    { date: '2025-01-15', liters: 12.5, amount: 625, status: 'Paid' },
    { date: '2025-01-08', liters: 10.0, amount: 500, status: 'Paid' },
    { date: '2025-01-01', liters: 11.0, amount: 550, status: 'Paid' },
  ];

  const ratePerLiter = 50;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>
      
      <View style={styles.summaryCard}>
        <Text style={styles.customerName}>Hello, {customerName}</Text>
        <Text style={styles.summaryText}>Total Milk Delivered: {totalLiters}L</Text>
        <Text style={styles.summaryText}>Rate per Liter: ₹{ratePerLiter}</Text>
        <Text style={styles.amountDue}>Amount Due: ₹{amountDue}</Text>
      </View>
      
      <View style={styles.paymentCard}>
        <Text style={styles.cardTitle}>Payment History</Text>
        {paymentHistory.map((payment, index) => (
          <View key={index} style={styles.historyItem}>
            <View style={styles.historyInfo}>
              <Text style={styles.historyDate}>{payment.date}</Text>
              <Text style={styles.historyDetails}>
                {payment.liters}L • ₹{payment.amount}
              </Text>
            </View>
            <View style={styles.paidBadge}>
              <Text style={styles.statusText}>{payment.status}</Text>
            </View>
          </View>
        ))}
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Payment Information</Text>
        <Text style={styles.infoText}>• Payments are due by the 5th of each month</Text>
        <Text style={styles.infoText}>• Cash payment to delivery person</Text>
        <Text style={styles.infoText}>• Contact admin for any payment issues</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 20,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 5,
  },
  amountDue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
    marginTop: 10,
  },
  paymentCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 15,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  historyInfo: {
    flex: 1,
  },
  historyDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: 4,
  },
  historyDetails: {
    fontSize: 12,
    color: '#94a3b8',
  },
  paidBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
  },
  infoCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 8,
  },
});
