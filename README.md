# 🥛 MilkAppV2 - Milk Delivery Management System

A comprehensive React Native mobile application for managing milk delivery operations with role-based access for administrators and customers.

## ✨ Features

### 🔐 Authentication & Authorization
- **Admin Login**: Secure admin dashboard access
- **Customer Login**: Individual customer portal
- **Role-based Navigation**: Separate interfaces for different user types

### 📊 Admin Dashboard
- **Real-time Statistics**: Total customers, daily deliveries, revenue tracking
- **Customer Management**: Add and manage customer information
- **Order Management**: Daily milk order processing
- **Payment Tracking**: Revenue reports and pending payments
- **Export Functionality**: Generate payment reports

### 👤 Customer Portal
- **Personal Dashboard**: View delivery history and payment status
- **Payment Summary**: Track amount due and payment history
- **Delivery Schedule**: View delivery timings and rates
- **Real-time Updates**: Live delivery status tracking

### 🎨 User Experience
- **Modern UI/UX**: Dark theme with intuitive design
- **Smooth Animations**: Fade-in effects and loading states
- **Responsive Design**: Optimized for mobile devices
- **Icon Integration**: Comprehensive icon system for better UX

## 🛠️ Technology Stack

- **Frontend**: React Native with Expo
- **Backend**: Firebase (Authentication & Firestore)
- **Navigation**: Expo Router
- **UI Components**: Custom components with React Native
- **Icons**: Expo Vector Icons
- **State Management**: React Hooks
- **Styling**: StyleSheet API

## 📱 Screenshots

### Admin Interface
- Dashboard with statistics
- Daily orders management
- Payment reports and tracking

### Customer Interface
- Personal delivery dashboard
- Payment history and status
- Delivery schedule information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI
- Android Studio / Xcode (for mobile development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanjayRyuzaki/MilkAppV2.git
   cd MilkAppV2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project
   - Add your Firebase configuration to `firebaseConfig.ts`
   - Enable Authentication and Firestore

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on device/simulator**
   ```bash
   npm run android
   # or
   npm run ios
   ```

## 📁 Project Structure

```
MilkAppV2/
├── app/
│   ├── (admin)/           # Admin screens
│   │   ├── admin-home.tsx
│   │   ├── daily-orders.tsx
│   │   ├── payments.tsx
│   │   └── _layout.tsx
│   ├── (customer)/        # Customer screens
│   │   ├── customer-home.tsx
│   │   ├── customer-payments.tsx
│   │   └── _layout.tsx
│   ├── auth/              # Authentication screens
│   │   ├── admin-login.tsx
│   │   ├── customer-login.tsx
│   │   └── register.tsx
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Home screen
├── components/            # Reusable components
├── constants/            # App constants
├── firebaseConfig.ts     # Firebase configuration
└── README.md
```

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication (Email/Password)
3. Enable Firestore Database
4. Add your configuration to `firebaseConfig.ts`

### Environment Variables
Create a `.env` file for sensitive configuration:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
```

## 📊 Features in Detail

### Admin Features
- **Dashboard Analytics**: Real-time statistics and metrics
- **Customer Management**: Add, edit, and manage customer data
- **Order Processing**: Daily milk order management
- **Payment Tracking**: Revenue monitoring and payment status
- **Report Generation**: Export payment and delivery reports

### Customer Features
- **Personal Dashboard**: Individual customer portal
- **Delivery History**: Track past deliveries
- **Payment Management**: View payment history and dues
- **Schedule Information**: Delivery timings and rates

## 🎯 Key Benefits

- **Efficient Management**: Streamlined milk delivery operations
- **Real-time Tracking**: Live updates on deliveries and payments
- **User-friendly Interface**: Intuitive design for all user types
- **Scalable Architecture**: Easy to extend and maintain
- **Cross-platform**: Works on both iOS and Android

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sanjay Ryuzaki**
- GitHub: [@SanjayRyuzaki](https://github.com/SanjayRyuzaki)

## 🙏 Acknowledgments

- React Native community for excellent documentation
- Expo team for the amazing development platform
- Firebase for robust backend services

---

**Built with ❤️ using React Native and Firebase** 