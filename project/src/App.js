import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import SignIn from './components/SignIn/SignIn'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SignIn/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});