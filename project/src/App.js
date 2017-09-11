import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';

const App = StackNavigator({
    SignIn: { screen: SignIn },
    Profile: { screen: Profile }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    }
});

export default App;