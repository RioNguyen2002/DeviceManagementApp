import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EmployeeScreen from '../screens/EmployeeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import AccountScreen from '../screens/AccountScreen';
import { TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();



const BottomNavigation = ({navigation}) => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Employee') {
                        iconName = 'people';
                    } else if (route.name === 'Statistics') {
                        iconName = 'bar-chart';
                    } else if (route.name === 'Account') {
                        iconName = 'account-circle';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerStyle: {
                    backgroundColor: '#1FD2BD', // Màu nền của header
                },

                tabBarActiveTintColor: '#1FD2BD',
                tabBarInactiveTintColor: 'gray',


            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={({ navigation }) => ({
                headerTitle: "Device Management",
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => alert('Search icon pressed')}>
                            <Icon name="search" size={25} color="white" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddDevice')}>
                            <Icon name="add-circle" size={25} color="white" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                    </View>
                ),
            })} />
            <Tab.Screen name='Employee' component={EmployeeScreen} options={({ navigation }) => ({
                headerTitle: "Device Management",
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => alert('Search icon pressed')}>
                            <Icon name="search" size={25} color="white" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddEmployee')}>
                            <Icon name="add-circle" size={25} color="white" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                    </View>
                ),
            })} />
            <Tab.Screen name='Statistics' component={StatisticsScreen} options={({ navigation }) => ({
                headerTitle: "Device Management",
              
            })}  />
            <Tab.Screen name='Account' component={AccountScreen} options={({ navigation }) => ({
                headerTitle: "Device Management",
              
            })}  />

        </Tab.Navigator >

    )
}

export default BottomNavigation