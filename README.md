# MilkAppV2

A React Native mobile application for milk delivery management, built with Expo and Firebase.

## Features

### Admin Features
- **Dashboard**: View total customers, daily deliveries, and revenue statistics
- **Daily Orders**: Log and manage daily milk deliveries for customers
- **Payment Reports**: Track customer payments and generate reports
- **Customer Management**: Add and manage customer information

### Customer Features
- **Delivery Tracking**: View delivery history and upcoming deliveries
- **Payment Management**: Track payment history and make payments
- **Account Information**: View delivery statistics and account details

## Technology Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router
- **Backend**: Firebase (Authentication & Firestore)
- **UI Components**: React Native Elements, Ionicons
- **State Management**: React Hooks
- **Styling**: React Native StyleSheet

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SanjayRyuzaki/MilkAppV2.git
cd MilkAppV2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
- iOS: Press `i` in the terminal or scan QR code with Expo Go app
- Android: Press `a` in the terminal or scan QR code with Expo Go app
- Web: Press `w` in the terminal

## Project Structure

```
MilkAppV2/
├── app/                    # Main application screens
│   ├── (admin)/           # Admin-specific screens
│   │   ├── admin-home.tsx
│   │   ├── daily-orders.tsx
│   │   └── payments.tsx
│   ├── (customer)/        # Customer-specific screens
│   │   ├── customer-home.tsx
│   │   └── customer-payments.tsx
│   ├── auth/              # Authentication screens
│   │   ├── admin-login.tsx
│   │   └── customer-login.tsx
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Home screen
├── components/            # Reusable components
├── constants/            # App constants
├── assets/              # Images, fonts, animations
└── firebaseConfig.ts    # Firebase configuration
```

## Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication and Firestore
3. Update `firebaseConfig.ts` with your Firebase credentials

### Environment Variables
Create a `.env` file in the root directory:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
```

## Usage

### Admin Login
- Email: `admin@milkapp.com`
- Password: `admin123`

### Customer Login
- Phone: `1234567890`
- Password: `customer123`

## Development

### Adding New Features
1. Create new screens in the appropriate directory (`app/(admin)/` or `app/(customer)/`)
2. Update navigation in `_layout.tsx` files
3. Add any new components to the `components/` directory
4. Update Firebase rules if needed

### Styling Guidelines
- Use consistent color scheme defined in `constants/Colors.ts`
- Follow the existing component structure
- Use Ionicons for icons
- Maintain responsive design for different screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

**Sanjay Ryuzaki**
- GitHub: [@SanjayRyuzaki](https://github.com/SanjayRyuzaki)
- Email: sanjay@example.com

---

Built with ❤️ using React Native and Expo 