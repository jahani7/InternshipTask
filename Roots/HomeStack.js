import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import History from '../Screens/History';
import Zone from '../Screens/Zone';
import Contact from '../Screens/Contact';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TabNavigator" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: {backgroundColor:"#F5F5F5"
                },
                tabBarActiveTintColor: 'dodgerblue',
                tabBarInactiveTintColor: '#F5F5F5',
                tabBarShowLabel: false,
                headerShown: false,
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome6 name="circle-half-stroke" size={24} color={focused ? 'dodgerblue' : 'grey'} />
                  ),
                }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome6 name="square-phone" size={24} color={focused ? 'dodgerblue' : 'grey'} />
                  ),
                }}
              />
              <Tab.Screen
                name="Zone"
                component={Zone}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome6 name="border-all" size={24} color={focused ? 'dodgerblue' : 'grey'} />
                  ),
                }}
              />
              <Tab.Screen
                name="History"
                component={History}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size, focused }) => (
                    <FontAwesome5 name="history" size={24} color={focused ? 'dodgerblue' : 'grey'} />
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
