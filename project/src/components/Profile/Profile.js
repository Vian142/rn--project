///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
import Information from './Information';
import bgImage from './images/background.jpg';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';

///////////////////////////////////////////////////////////////////////////////
export default class Profile extends Component {
    static navigationOptions = {
        title: 'Hello',
        headerBackgroundColor: 'blue'
    };
    render() {
        const { navigate } = this.props.navigation;
        return <BackgroundImage image={bgImage}>
            {
                console.log(this.navigationOptions)
            }
            <View style={styles.wrapper}>
                <View style={styles.top}>
                    <Text style={styles.process}>Показ ...</Text>
                    <Text style={styles.nameSubject}>Reese, John</Text>
                </View>
                <View style={styles.avatarBlock}>
                    <Image
                        style={styles.avatar}
                        source={require('./images/jonh_reese.jpeg')} />
                </View>
                <View style={styles.middle}>
                    <Information />
                </View>
                <View style={styles.btnWrap}>
                    <Button
                        onPress={
                            () =>
                                navigate('SignIn', { name: 'Profile' })
                        }
                        title='More' />
                </View>
            </View>
        </BackgroundImage>
    }
}


///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    process: {
        padding: 2,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    nameSubject: {
        padding: 2,
        paddingLeft: 10,
        fontSize: 18,
        backgroundColor: '#fffe22',
        color: '#000000',
        fontWeight: 'bold',
    },
    avatarBlock: {
        flex: 1.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 5,
    },
    avatar: {
        width: 150,
        height: 150
    },
    middle: {
        flex: 2,
        flexDirection: 'column',
    },
    rowText: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    rowTextKey: {
        marginRight: 5,
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    rowTextValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.9)'
    }
})

///////////////////////////////////////////////////////////////////////////////