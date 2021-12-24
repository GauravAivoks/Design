
import React, { Component } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from './core/theme'
import Order from './screens/Order'
import checkout from './screens/checkout';

const Stack = createNativeStackNavigator()

export default class Nav extends Component {
    render() {
        return (
            <Provider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Order"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Oder" component={Order} />
                        <Stack.Screen name="Checkout" component={checkout} />
                      
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

