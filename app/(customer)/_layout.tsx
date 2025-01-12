import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomerTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#111827',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: '#9ca3af',
        headerStyle: {
          backgroundColor: '#1f2937',
        },
        headerTitleStyle: {
          color: '#facc15',
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="customer-home"
        options={{
          title: 'My Milk',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="water-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="customer-payments"
        options={{
          title: 'My Payments',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
