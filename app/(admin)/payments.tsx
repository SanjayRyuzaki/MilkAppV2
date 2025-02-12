import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Payments() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    totalRevenue: 12500,
    pendingAmount: 3200,
    customers: [
      { id: '1', name: 'John Doe', amount: 1500, status: 'paid', date: '2025-01-15' },
      { id: '2', name: 'Jane Smith', amount: 800, status: 'pending', date: '2025-01-14' },
      { id: '3', name: 'Mike Johnson', amount: 900, status: 'paid', date: '2025-01-13' },
      { id: '4', name: 'Sarah Wilson', amount: 1200, status: 'pending', date: '2025-01-12' },
    ]
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleExportReport = () => {
    Alert.alert('Export Report', 'Payment report exported successfully!');
  };

  const handleSendReminders = () => {
    Alert.alert('Send Reminders', 'Payment reminders sent to pending customers!');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Ionicons name="refresh" size={40} color="#4ade80" />
        <Text style={styles.loadingText}>Loading payment data...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="card" size={30} color="#4ade80" />
        <Text style={styles.title}>Payment Reports</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="cash" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>₹{paymentData.totalRevenue}</Text>
          <Text style={styles.statLabel}>Total Revenue</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="time" size={24} color="#f59e0b" />
          <Text style={styles.statNumber}>₹{paymentData.pendingAmount}</Text>
          <Text style={styles.statLabel}>Pending Amount</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleExportReport}>
          <Ionicons name="download" size={20} color="#fff" />
          <Text style={styles.actionText}>Export Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleSendReminders}>
          <Ionicons name="mail" size={20} color="#fff" />
          <Text style={styles.actionText}>Send Reminders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paymentsList}>
        <Text style={styles.sectionTitle}>Recent Payments</Text>
        
        {paymentData.customers.map((customer) => (
          <View key={customer.id} style={styles.paymentCard}>
            <View style={styles.customerInfo}>
              <Ionicons name="person-circle" size={40} color="#4ade80" />
              <View style={styles.customerDetails}>
                <Text style={styles.customerName}>{customer.name}</Text>
                <Text style={styles.paymentDate}>{customer.date}</Text>
              </View>
            </View>
            
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentAmount}>₹{customer.amount}</Text>
              <View style={[
                styles.statusBadge,
                customer.status === 'paid' ? styles.paidBadge : styles.pendingBadge
              ]}>
                <Ionicons 
                  name={customer.status === 'paid' ? 'checkmark-circle' : 'time'} 
                  size={16} 
                  color={customer.status === 'paid' ? '#10b981' : '#f59e0b'} 
                />
                <Text style={[
                  styles.statusText,
                  customer.status === 'paid' ? styles.paidText : styles.pendingText
                ]}>
                  {customer.status.toUpperCase()}
                </Text>
              </View>
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
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1c1c2b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#2e2e3e',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ade80',
    marginTop: 8,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#4ade80',
    padding: 15,
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  paymentsList: {
    gap: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: 10,
  },
  paymentCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  customerDetails: {
    marginLeft: 10,
  },
  customerName: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: '600',
  },
  paymentDate: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 2,
  },
  paymentInfo: {
    alignItems: 'flex-end',
  },
  paymentAmount: {
    color: '#4ade80',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
});
