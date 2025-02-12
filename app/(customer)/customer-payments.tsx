import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomerPayments() {
  const [paymentData] = useState({
    totalMilkDelivered: 45.5,
    ratePerLiter: 50,
    amountDue: 2275,
    paymentHistory: [
      { id: '1', date: '2025-01-15', amount: 125, status: 'paid' },
      { id: '2', date: '2025-01-08', amount: 125, status: 'paid' },
      { id: '3', date: '2025-01-01', amount: 125, status: 'paid' },
    ]
  });

  const handleMakePayment = () => {
    // Handle payment logic
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="card" size={30} color="#10b981" />
        <Text style={styles.title}>My Payments</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="water" size={24} color="#10b981" />
          <Text style={styles.summaryNumber}>{paymentData.totalMilkDelivered}L</Text>
          <Text style={styles.summaryLabel}>Total Milk Delivered</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="cash" size={24} color="#f59e0b" />
          <Text style={styles.summaryNumber}>₹{paymentData.amountDue}</Text>
          <Text style={styles.summaryLabel}>Amount Due</Text>
        </View>
      </View>

      <View style={styles.rateInfo}>
        <View style={styles.infoCard}>
          <Ionicons name="calculator" size={20} color="#10b981" />
          <Text style={styles.infoTitle}>Rate per Liter</Text>
          <Text style={styles.infoValue}>₹{paymentData.ratePerLiter}</Text>
        </View>
      </View>

      <View style={styles.paymentHistory}>
        <Text style={styles.sectionTitle}>Payment History</Text>
        
        {paymentData.paymentHistory.map((payment) => (
          <View key={payment.id} style={styles.paymentCard}>
            <View style={styles.paymentInfo}>
              <Ionicons name="calendar" size={20} color="#10b981" />
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentDate}>{payment.date}</Text>
                <Text style={styles.paymentAmount}>₹{payment.amount}</Text>
              </View>
            </View>
            
            <View style={[
              styles.statusBadge,
              payment.status === 'paid' ? styles.paidBadge : styles.pendingBadge
            ]}>
              <Ionicons 
                name={payment.status === 'paid' ? 'checkmark-circle' : 'time'} 
                size={16} 
                color={payment.status === 'paid' ? '#10b981' : '#f59e0b'} 
              />
              <Text style={[
                styles.statusText,
                payment.status === 'paid' ? styles.paidText : styles.pendingText
              ]}>
                {payment.status.toUpperCase()}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handleMakePayment}>
        <Ionicons name="card" size={20} color="#fff" />
        <Text style={styles.payButtonText}>Make Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
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
    color: '#f1f5f9',
    marginLeft: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginTop: 8,
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
  rateInfo: {
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  infoTitle: {
    color: '#94a3b8',
    fontSize: 14,
    marginLeft: 10,
  },
  infoValue: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  paymentHistory: {
    gap: 15,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: 10,
  },
  paymentCard: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentDetails: {
    marginLeft: 10,
  },
  paymentDate: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: '600',
  },
  paymentAmount: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  paidBadge: {
    backgroundColor: '#10b98120',
  },
  pendingBadge: {
    backgroundColor: '#f59e0b20',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  paidText: {
    color: '#10b981',
  },
  pendingText: {
    color: '#f59e0b',
  },
  payButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
