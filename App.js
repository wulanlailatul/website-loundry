import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import LoginScreen from './Login';
import HomeScreen from './Home';
import OrderScreen from './Order';
import ProfileScreen from './Profile';
import DrawerMenu from './Drawer';
import LaundryScreen from './SelectedOrdersScreen';

// Membuat navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DrawerNavigator = createDrawerNavigator();

// Tab navigation utama
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Order') {
            iconName = 'cart';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0077c2',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Drawer navigation utama
const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator drawerContent={(props) => <DrawerMenu {...props} />}>
      <DrawerNavigator.Screen name="Main" component={MainTabNavigator} />
      <DrawerNavigator.Screen name="SelectedOrders" component={LaundryScreen} />
    </DrawerNavigator.Navigator>
  );
};

// Stack navigator untuk mengelola layar utama dan login
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={AppDrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="SelectedOrders" component={LaundryScreen} options={{ headerShown: true, title: 'Selected Orders' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
