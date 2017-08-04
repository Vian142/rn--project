
///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
///////////////////////////////////////////////////////////////////////////////

let img = require('./images/photo-01.png');

const Row = (props) => {
    const { data } = props;
    return <View style={styles.item}>
        <Image
            style={styles.image}
            source={img} />
        <View style={styles.info}>
            <Text style={styles.name}>
                {`${data.name.first} ${data.name.last}`}
            </Text>
            <Text style={styles.company}>
                {`${data.company}`}
            </Text>
        </View>
        <View style={styles.user_info}>
            <Text style={styles.age}>
                {`${data.age}`}
            </Text>
        </View>
        <View style={styles.more}>
            <Icon
                size={20}
                name='description'
                color='#FAFAFA'
                iconStyle={styles.icon}
            />
        </View>
    </View>
}

///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.9)',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        width: 60,
        height: 60,
        borderRadius: 50
    },
    info: {
        flex: 4,
        flexDirection: 'column',
        paddingLeft: 10
    },
    user_info: {
        flex: 1,
        flexDirection: 'row'
    },
    name: {
        fontSize: 18,
        color: '#ffffff'
    },
    company: {
        fontSize: 12,
        color: '#bdbdbd'
    },
    age: {
        flex: 1,        
        color: '#ffffff'
    },
    city: {
        flex: 1,
        color: '#ffffff'
    },
    more: {
        flex: 0.5,
        width: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5
    }
})


export default Row;

///////////////////////////////////////////////////////////////////////////////