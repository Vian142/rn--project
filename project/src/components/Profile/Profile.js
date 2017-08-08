///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Information from './Information';
import bgImage from './images/background.jpg';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';

///////////////////////////////////////////////////////////////////////////////
export default class Profile extends Component {
    render() {
        return <BackgroundImage image={bgImage}>
            <View style={styles.wrapper}>
                <View style={styles.top}>
                    <Text style={styles.process}>Показ ...</Text>
                    <Text style={styles.nameSubject}>Reese, John</Text>
                </View>
                <View style={styles.infoBlock}>
                    <Image
                        style={styles.avatar}
                        source={require('./images/jonh_reese.jpeg')} />
                </View>
                <View style={styles.middle}>
                    <Information/>
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
        padding: 5,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    nameSubject: {
        padding: 6,
        paddingLeft: 10,
        fontSize: 18,
        backgroundColor: '#fffe22',
        color: '#000000',
        fontWeight: 'bold',
    },
    infoBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 5,
    },
    mainInfo: {
        flex: 2,
        paddingLeft: 0
    },
    profession: {
        fontSize: 14,
        color: '#bdbdbd'
    },
    middle: {
        flex: 1.5,
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
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    rowTextValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.9)'
    },
    sidebar: {
        flex: 1
    },
    content: {
        flex: 6
    }
})

///////////////////////////////////////////////////////////////////////////////