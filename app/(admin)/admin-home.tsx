import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AdminHome() {
  const [totalCustomers, setTotalCustomers] = useState(25);
  const [todayDeliveries, setTodayDeliveries] = useState(18);
  const [totalRevenue, setTotalRevenue] = useState(4500);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalCustomers}</Text>
          <Text style={styles.statLabel}>Total Customers</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{todayDeliveries}</Text>
          <Text style={styles.statLabel}>Today's Deliveries</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>₹{totalRevenue}</Text>
          <Text style={styles.statLabel}>Total Revenue</Text>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Add New Customer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>View Daily Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Payment Reports</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
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
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
  },
  actionsContainer: {
    gap: 15,
  },
  actionButton: {
    backgroundColor: '#4ade80',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
