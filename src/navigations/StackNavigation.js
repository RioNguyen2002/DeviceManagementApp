import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../screens/SplashScreen';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{
      
      headerShown:false,
     
      
    }}>
      <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='AddDevice' component={AddDeviceScreen}  />
      <Stack.Screen name='AddEmployee' component={AddEmployeeScreen}  />
      <Stack.Screen name='Tabs' component={BottomNavigation} />
    </Stack.Navigator>
  )
}

export default StackNavigation