import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Profile from './components/Profile/Profile'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Profile/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    }
});