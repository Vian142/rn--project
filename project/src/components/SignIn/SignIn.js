///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image
} from 'react-native';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';
import { Button, Icon } from 'react-native-elements';

const bgImage = require('./background.jpg');
const logo = require('./logo.png');

///////////////////////////////////////////////////////////////////////////////
export default class SignIn extends Component {
    static navigationOptions = {
        title: 'Welcome',      
        headerStyle: {
            paddingRight: 10,
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1000,
            top: 0,
            left: 0,
            right: 0
        },
        headerRight: <Icon name='dashboard' />
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <BackgroundImage image={bgImage}>
                    <View style={styles.top}>
                        <Image source={logo} style={styles.logo} />
                        <View style={styles.line} />
                        <View style={styles.text}>
                            <Text style={styles.text_top}>Добро пожаловать</Text>
                            <Text style={styles.text_middle}>вход</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.form}>
                            <View style={styles.input_row}>
                                <Icon name='perm-identity'
                                    type='material'
                                    color='#ffffff'
                                    style={styles.input_icon} />
                                <TextInput style={styles.input}
                                    placeholder={'Login'}
                                    multiline={false}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)' />
                            </View>
                            <View style={styles.input_row}>
                                <Icon name='vpn-key'
                                    type='material'
                                    color='#ffffff'
                                    style={styles.input_icon} />
                                <TextInput style={styles.input}
                                    secureTextEntry={true}
                                    placeholder={'Password'}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)' />
                            </View>
                            <Button
                                title='Вход'
                                buttonStyle={styles.submit}
                                backgroundColor='#ff2b4a'
                                large={true}
                                onPress={() =>
                                    navigate('Profile')
                                } />
                        </View>
                    </View>
                </BackgroundImage>
            </View>
        );
    }
}

///////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
    headerStyle: {
        paddingRight: 5
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    top: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: 100,
        height: 2,
        backgroundColor: '#ff2b4a',
        marginBottom: 10
    },
    logo: {
        width: 140,
        height: 140,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        marginBottom: 15
    },
    text_top: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center'
    },
    text_middle: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '100'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    form: {
        width: 300,
        height: 160,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    input_row: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 15
    },
    input_icon: {
        flex: 1,
        height: 30,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 5,
        borderRightWidth: 1,
        borderRightColor: '#ffffff'
    },
    input: {
        flex: 7,
        height: 60,
        borderWidth: 0,
        paddingLeft: 15,
        paddingBottom: 22,
        color: '#ffffff'
    },
    submit: {
        flex: 1,
        height: 60
    }
});

///////////////////////////////////////////////////////////////////////////////