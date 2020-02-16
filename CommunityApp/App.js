import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import SwitchNavigator from './navigation/SwitchNavigator';
import Communities from './screens/Communities';
import Events from './screens/Events';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import reducer from './reducers';
// import { createAppContainer } from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

const Tab = createBottomTabNavigator();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Communities" component={Communities} />
                        <Tab.Screen name="Events" component={Events} />
                        <Tab.Screen name="Account" component={SwitchNavigator} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App;

// class HomeScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Home Screen</Text>  
//             </View>  
//         );  
//     }  
// }  