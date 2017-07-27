///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';
import { Button, Icon } from 'react-native-elements';

const bgImage = require('./background.jpg');

///////////////////////////////////////////////////////////////////////////////
export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <BackgroundImage image={bgImage}>
                    <View style={styles.top}>
                        <View style={styles.top_logo}>
                            <Text>Logo</Text>
                        </View>
                        <View style={styles.message}>
                            <Text>Вход</Text>
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
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)'/>
                            </View>
                            <View style={styles.input_row}>
                                <Icon name='vpn-key'
                                    type='material'
                                    color='#ffffff'
                                    style={styles.input_icon} />
                                <TextInput style={styles.input}
                                    placeholder={'Password'}
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)'/>
                            </View>
                            <Button
                                title='BUTTON'
                                style={styles.submit}/>
                        </View>
                    </View>
                </BackgroundImage>
            </View>
        );
    }
}

///////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    top: {
        flex: 2
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: 320,
        height: 170
    },
    input_row: {
        width: 320,
        height: 60,
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
        paddingLeft: 15,
        borderRightWidth: 1
    },
    input: {
        flex: 8,
        height: 60,
        borderWidth: 0,
        color: '#ffffff'
    },
    submit: {
        width: 330
    }
});

///////////////////////////////////////////////////////////////////////////////