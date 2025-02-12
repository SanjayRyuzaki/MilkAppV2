import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomerHome() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [deliveryData] = useState({
    totalLiters: 45.5,
    amountDue: 2275,
    nextDelivery: 'Tomorrow, 7:00 AM',
    recentDeliveries: [
      { date: '2025-01-15', liters: 2.5, status: 'delivered' },
      { date: '2025-01-14', liters: 2.0, status: 'delivered' },
      { date: '2025-01-13', liters: 2.5, status: 'delivered' },
    ]
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Ionicons name="water" size={30} color="#10b981" />
        <Text style={styles.title}>My Milk Delivery</Text>
      </Animated.View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="water" size={24} color="#10b981" />
          <Text style={styles.summaryNumber}>{deliveryData.totalLiters}L</Text>
          <Text style={styles.summaryLabel}>Total Delivered</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="card" size={24} color="#f59e0b" />
          <Text style={styles.summaryNumber}>₹{deliveryData.amountDue}</Text>
          <Text style={styles.summaryLabel}>Amount Due</Text>
        </View>
      </View>

      <View style={styles.deliveryInfo}>
        <View style={styles.infoCard}>
          <Ionicons name="time" size={20} color="#10b981" />
          <Text style={styles.infoTitle}>Next Delivery</Text>
          <Text style={styles.infoValue}>{deliveryData.nextDelivery}</Text>
        </View>
      </View>

      <View style={styles.recentDeliveries}>
        <Text style={styles.sectionTitle}>Recent Deliveries</Text>
        
        {deliveryData.recentDeliveries.map((delivery, index) => (
          <View key={index} style={styles.deliveryCard}>
            <View style={styles.deliveryInfo}>
              <Ionicons name="calendar" size={20} color="#10b981" />
              <View style={styles.deliveryDetails}>
                <Text style={styles.deliveryDate}>{delivery.date}</Text>
                <Text style={styles.deliveryLiters}>{delivery.liters} liters</Text>
              </View>
            </View>
            
            <View style={[
              styles.statusBadge,
              delivery.status === 'delivered' ? styles.deliveredBadge : styles.pendingBadge
            ]}>
              <Ionicons 
                name={delivery.status === 'delivered' ? 'checkmark-circle' : 'time'} 
                size={16} 
                color={delivery.status === 'delivered' ? '#10b981' : '#f59e0b'} 
              />
              <Text style={[
                styles.statusText,
                delivery.status === 'delivered' ? styles.deliveredText : styles.pendingText
              ]}>
                {delivery.status.toUpperCase()}
              </Text>
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
  deliveryInfo: {
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
  recentDeliveries: {
    gap: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: 10,
  },
  deliveryCard: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  deliveryDetails: {
    marginLeft: 10,
  },
  deliveryDate: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: '600',
  },
  deliveryLiters: {
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
  deliveredBadge: {
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
  deliveredText: {
    color: '#10b981',
  },
  pendingText: {
    color: '#f59e0b',
  },
});
