import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import UsersList from './components/UsersList/UsersList'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <UsersList/>
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