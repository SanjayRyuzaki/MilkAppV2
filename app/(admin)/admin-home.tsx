import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AdminHome() {
  const [totalCustomers, setTotalCustomers] = useState(25);
  const [todayDeliveries, setTodayDeliveries] = useState(18);
  const [totalRevenue, setTotalRevenue] = useState(4500);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddCustomer = () => {
    Alert.alert('Add Customer', 'Navigate to customer management screen');
  };

  const handleViewOrders = () => {
    Alert.alert('View Orders', 'Navigate to daily orders screen');
  };

  const handleViewPayments = () => {
    Alert.alert('View Payments', 'Navigate to payment reports screen');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Ionicons name="refresh" size={40} color="#4ade80" />
        <Text style={styles.loadingText}>Loading dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Ionicons name="analytics" size={30} color="#4ade80" />
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="people" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>{totalCustomers}</Text>
          <Text style={styles.statLabel}>Total Customers</Text>
        </View>
        
        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>{todayDeliveries}</Text>
          <Text style={styles.statLabel}>Today's Deliveries</Text>
        </View>
        
        <View style={styles.statCard}>
          <Ionicons name="cash" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>₹{totalRevenue}</Text>
          <Text style={styles.statLabel}>Total Revenue</Text>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleAddCustomer}>
          <Ionicons name="person-add" size={24} color="#fff" />
          <Text style={styles.actionText}>Add New Customer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleViewOrders}>
          <Ionicons name="list" size={24} color="#fff" />
          <Text style={styles.actionText}>View Daily Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleViewPayments}>
          <Ionicons name="card" size={24} color="#fff" />
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
    gap: 15,
  },
  actionButton: {
    backgroundColor: '#4ade80',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
