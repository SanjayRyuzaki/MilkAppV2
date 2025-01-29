import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Payments() {
  const [selectedMonth, setSelectedMonth] = useState('January 2025');
  const [isLoading, setIsLoading] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(8850);
  const [pendingAmount, setPendingAmount] = useState(3950);

  const paymentData = [
    { customer: 'John Doe', liters: 45.5, amount: 2275, status: 'Paid', date: '2025-01-15' },
    { customer: 'Jane Smith', liters: 38.0, amount: 1900, status: 'Pending', date: '2025-01-20' },
    { customer: 'Mike Johnson', liters: 52.5, amount: 2625, status: 'Paid', date: '2025-01-18' },
    { customer: 'Sarah Wilson', liters: 41.0, amount: 2050, status: 'Pending', date: '2025-01-22' },
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate data loading
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Ionicons name="cash" size={30} color="#4ade80" />
        <Text style={styles.title}>Payment Reports</Text>
      </View>
      
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="trending-up" size={24} color="#4ade80" />
          <Text style={styles.summaryLabel}>Total Revenue</Text>
          <Text style={styles.summaryValue}>₹{totalRevenue}</Text>
        </View>
        
        <View style={styles.summaryCard}>
          <Ionicons name="time" size={24} color="#f59e0b" />
          <Text style={styles.summaryLabel}>Pending Amount</Text>
          <Text style={styles.summaryValue}>₹{pendingAmount}</Text>
        </View>
      </View>
      
      <View style={styles.monthSelector}>
        <Ionicons name="calendar" size={20} color="#fff" />
        <Text style={styles.monthText}>{selectedMonth}</Text>
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
      
      <View style={styles.paymentList}>
        {paymentData.map((item, index) => (
          <View key={index} style={styles.paymentCard}>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>{item.customer}</Text>
              <Text style={styles.customerDetails}>
                {item.liters}L • ₹{item.amount} • {item.date}
              </Text>
            </View>
            
            <View style={[
              styles.statusBadge,
              item.status === 'Paid' ? styles.paidBadge : styles.pendingBadge
            ]}>
              <Ionicons 
                name={item.status === 'Paid' ? "checkmark-circle" : "time"} 
                size={16} 
                color="#fff" 
              />
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 5,
    marginTop: 8,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ade80',
  },
  monthSelector: {
    backgroundColor: '#2e2e3e',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#4ade80',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  paymentList: {
    gap: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 4,
  },
});
