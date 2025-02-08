import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AdminHome() {
  const router = useRouter();
  // Bug: Removed loading state management
  const [stats, setStats] = useState({
    totalCustomers: 0,
    todayDeliveries: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // Simulate API call without proper loading state
    setTimeout(() => {
      setStats({
        totalCustomers: 45,
        todayDeliveries: 23,
        totalRevenue: 12500,
      });
    }, 2000);
  }, []);

  const handleDailyOrders = () => {
    router.push('/(admin)/daily-orders');
  };

  const handlePayments = () => {
    router.push('/(admin)/payments');
  };

  const handleAddCustomer = () => {
    Alert.alert('Add Customer', 'Feature coming soon!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={styles.subtitle}>Welcome back, Admin!</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="people" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>{stats.totalCustomers}</Text>
          <Text style={styles.statLabel}>Total Customers</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="car" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>{stats.todayDeliveries}</Text>
          <Text style={styles.statLabel}>Today's Deliveries</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="cash" size={24} color="#4ade80" />
          <Text style={styles.statNumber}>₹{stats.totalRevenue}</Text>
          <Text style={styles.statLabel}>Total Revenue</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleDailyOrders}>
          <Ionicons name="list" size={24} color="#fff" />
          <Text style={styles.actionText}>Daily Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handlePayments}>
          <Ionicons name="card" size={24} color="#fff" />
          <Text style={styles.actionText}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleAddCustomer}>
          <Ionicons name="person-add" size={24} color="#fff" />
          <Text style={styles.actionText}>Add Customer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
  actionsContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  actionButton: {
    backgroundColor: '#4ade80',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4ade80',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
});
