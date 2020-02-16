import React from 'react'
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Home from '../screens/Home'
import Events from '../screens/Events'
import Commumnities from '../screens/Communities'

let Stack = createStackNavigator();

const SwitchNavigator = function () {
    return <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
}

const ExtraTabNavigation = function () {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Communities" component={Communities} />
    </Stack.Navigator>
}



export default SwitchNavigator