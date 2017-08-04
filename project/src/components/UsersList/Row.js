
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
        <Text style={styles.text}>
            {`${data.name.first} ${data.name.last}`}
        </Text>
        <Text style={styles.age}>
            {`${data.age}`}
        </Text>
        <Text style={styles.city}>
            {`${data.age}`}
        </Text>
        <Icon 
            name='remove-red-eye'
            color='#517fa4'
            iconStyle={styles.icon}
        />
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
        width: 40,
        height: 40,
        borderRadius: 50
    },
    text: {
        flex: 5,
        paddingLeft: 15,
        color: '#ffffff'
    },
    age: {
        flex: 1
    },
    city: {
        flex: 1
    },
    icon: {
        fontSize: 16
    }
})


export default Row;

///////////////////////////////////////////////////////////////////////////////