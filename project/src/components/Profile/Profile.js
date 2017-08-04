///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import bgImage from './images/background.jpg';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';
import Sidebar from './Sidebar';
import Gallery from './Gallery';

///////////////////////////////////////////////////////////////////////////////
export default class Profile extends Component {
    render() {
        return <BackgroundImage image={bgImage}>
            <View style={styles.wrapper}>
                <View style={styles.top}>
                    <Image
                        style={styles.avatar}    
                        source={require('./images/photo.png')} />
                    <View style={styles.mainInfo}>
                        <Text style={styles.name}>Oliver Queen</Text>
                        <Text style={styles.profession}>Vigilante</Text>
                    </View>
                </View>
                <View style={styles.middle}>
                    <View style={styles.sidebar}>
                        <Sidebar/>
                    </View>
                    <View style={styles.content}>
                        <Gallery/>
                    </View>
                </View>
            </View>
        </BackgroundImage>
    }
}


///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    mainInfo: {
        flex: 3,
        paddingLeft: 15
    },
    name: {
        fontSize: 24,
        color: '#ffffff'
    },
    profession: {
        fontSize: 14,
        color: '#bdbdbd'
    },
    middle: {
        flex: 4,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.3)',
    },
    sidebar: {
        flex: 1
    },
    content: {
        flex: 6
    }
})

///////////////////////////////////////////////////////////////////////////////