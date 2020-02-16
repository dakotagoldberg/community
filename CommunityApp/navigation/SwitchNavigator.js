import React from 'react'
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'

let Stack = createStackNavigator();

const SwitchNavigator = function () {
    return <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
}

//   AppRegistry.registerComponent('SimpleApp', () => SimpleApp);


export default SwitchNavigator