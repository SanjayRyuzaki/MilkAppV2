import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function CustomerHome() {
  const [customerName] = useState('John Doe');
  const [totalLiters, setTotalLiters] = useState(45.5);
  const [thisMonthLiters, setThisMonthLiters] = useState(12.0);
  const [amountDue, setAmountDue] = useState(2250);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome, {customerName}!</Text>
      
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>This Month</Text>
        <Text style={styles.summaryValue}>{thisMonthLiters} L</Text>
        <Text style={styles.summaryLabel}>Milk Delivered</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalLiters}</Text>
          <Text style={styles.statLabel}>Total Liters</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>₹{amountDue}</Text>
          <Text style={styles.statLabel}>Amount Due</Text>
        </View>
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Delivery Schedule</Text>
        <Text style={styles.infoText}>• Daily delivery at 7:00 AM</Text>
        <Text style={styles.infoText}>• Standard quantity: 1.5L per day</Text>
        <Text style={styles.infoText}>• Rate: ₹50 per liter</Text>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 10,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
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
