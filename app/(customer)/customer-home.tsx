import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomerHome() {
  const [customerName] = useState('John Doe');
  const [totalLiters, setTotalLiters] = useState(45.5);
  const [thisMonthLiters, setThisMonthLiters] = useState(12.0);
  const [amountDue, setAmountDue] = useState(2250);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const deliveryHistory = [
    { date: 'Today', liters: 1.5, status: 'Delivered' },
    { date: 'Yesterday', liters: 1.5, status: 'Delivered' },
    { date: '2 days ago', liters: 1.5, status: 'Delivered' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Ionicons name="person-circle" size={50} color="#facc15" />
        <Text style={styles.title}>Welcome, {customerName}!</Text>
        <Text style={styles.subtitle}>Your daily milk delivery partner</Text>
      </Animated.View>
      
      <Animated.View style={[styles.summaryCard, { opacity: fadeAnim }]}>
        <View style={styles.summaryHeader}>
          <Ionicons name="calendar" size={24} color="#10b981" />
          <Text style={styles.summaryTitle}>This Month</Text>
        </View>
        <Text style={styles.summaryValue}>{thisMonthLiters} L</Text>
        <Text style={styles.summaryLabel}>Milk Delivered</Text>
      </Animated.View>
      
      <View style={styles.statsContainer}>
        <Animated.View style={[styles.statCard, { opacity: fadeAnim }]}>
          <Ionicons name="water" size={24} color="#10b981" />
          <Text style={styles.statNumber}>{totalLiters}</Text>
          <Text style={styles.statLabel}>Total Liters</Text>
        </Animated.View>
        
        <Animated.View style={[styles.statCard, { opacity: fadeAnim }]}>
          <Ionicons name="card" size={24} color="#10b981" />
          <Text style={styles.statNumber}>₹{amountDue}</Text>
          <Text style={styles.statLabel}>Amount Due</Text>
        </Animated.View>
      </View>
      
      <Animated.View style={[styles.historyCard, { opacity: fadeAnim }]}>
        <Text style={styles.historyTitle}>Recent Deliveries</Text>
        {deliveryHistory.map((delivery, index) => (
          <View key={index} style={styles.historyItem}>
            <View style={styles.historyInfo}>
              <Text style={styles.historyDate}>{delivery.date}</Text>
              <Text style={styles.historyDetails}>{delivery.liters}L delivered</Text>
            </View>
            <View style={styles.deliveredBadge}>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
              <Text style={styles.statusText}>{delivery.status}</Text>
            </View>
          </View>
        ))}
      </Animated.View>
      
      <Animated.View style={[styles.infoCard, { opacity: fadeAnim }]}>
        <Text style={styles.infoTitle}>Delivery Schedule</Text>
        <View style={styles.infoItem}>
          <Ionicons name="time" size={16} color="#94a3b8" />
          <Text style={styles.infoText}>Daily delivery at 7:00 AM</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="water" size={16} color="#94a3b8" />
          <Text style={styles.infoText}>Standard quantity: 1.5L per day</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="card" size={16} color="#94a3b8" />
          <Text style={styles.infoText}>Rate: ₹50 per liter</Text>
        </View>
      </Animated.View>
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
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#facc15',
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginLeft: 8,
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
    borderRadius: 16,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
    marginTop: 8,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  historyCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  historyTitle: {
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
  deliveredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10b98120',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#10b981',
    marginLeft: 4,
  },
  infoCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#94a3b8',
    marginLeft: 8,
  },
});
