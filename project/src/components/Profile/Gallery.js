///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
const image0 = require('./images/photo.png');
const image1 = require('./images/photo-1.jpg');
const image2 = require('./images/photo-2.jpg');
const image3 = require('./images/photo-3.jpg');

///////////////////////////////////////////////////////////////////////////////
function Item(props) {
    const { img } = props;
    return <View style={styles.item}>
        <Image
            style={styles.image}
            source={img} />
    </View>
}


///////////////////////////////////////////////////////////////////////////////
export default class Gallery extends Component {
    render() {
        return <View style={styles.galleryWrapper}>
            <View style={styles.options}>
                <View style={styles.button}>
                    <Icon
                        size={28}
                        name='search'
                        color='#FAFAFA'
                    />
                </View>
                <View style={styles.button}>
                    <Icon
                        size={28}
                        name='location-searching'
                        color='#FAFAFA'
                        iconStyle={styles.icon}
                    />
                </View>
                <View style={styles.button}>
                    <Icon
                        size={28}
                        name='view-list'
                        color='#FAFAFA'
                        iconStyle={styles.icon}
                    />
                </View>
            </View>
            <ScrollView bounces={true} style={styles.scrollContainer}>
                <View style={styles.gallery}>
                    <Item img={image0}/>
                    <Item img={image1}/>
                    <Item img={image3}/>
                    <Item img={image2}/>
                    <Item img={image1}/>
                    <Item img={image3}/>
                    <Item img={image0}/>
                    <Item img={image1}/>
                    <Item img={image3}/>
                    <Item img={image2}/>
                    <Item img={image1}/>
                    <Item img={image3} />
                    <Item img={image0}/>
                </View>
            </ScrollView>
        </View>
    }
}


///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    galleryWrapper: {
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: 1,
        borderRightColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    options: {
        height: 70,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1
    },
    scrollContainer: {
        paddingVertical: 5
    },
    gallery: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        justifyContent: 'space-between'
    },
    item: {
        width: 160,
        marginBottom: 10
    },
    image: {
        width: 160,
        height: 160
    }
})

///////////////////////////////////////////////////////////////////////////////