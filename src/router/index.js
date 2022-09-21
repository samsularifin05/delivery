import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonNavigator} from './../components';
import {Home, Keranjang, Login, Pesan, Profile} from '../pages';

const Tab = createBottomTabNavigator();

const MyApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Pesan" component={Pesan} options={{headerShown: false}} />
      <Tab.Screen name="Keranjang" component={Keranjang} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};
const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="MyApp"
        component={MyApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default router;
