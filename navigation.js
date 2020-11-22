import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createStackNavigator, HeaderTitle , CardStyleInterpolators, TransitionPresets} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SelectionScreen from './screens/SelectionScreen';
import LoginScreen from './screens/LoginScreen';
import AdminsScreen from './screens/AdminsScreen';
import UserScreen from './screens/UserScreen';

const MainNavigator = createSwitchNavigator({
selection: SelectionScreen,
login: LoginScreen,
admin: AdminsScreen,
user: UserScreen,
},{
    mode: 'card',
    animationEnabled: true, 
    initialRouteName: 'selection' ,
    defaultNavigationOptions: {
        header: null, 
                 
}})

export default createAppContainer(MainNavigator)