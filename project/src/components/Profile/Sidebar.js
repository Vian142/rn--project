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
function Item(props) {
    const { icon } = props;
    return <View style={styles.item}>
        <Icon
            size={32}
            name={icon}
            color='#FAFAFA'
            iconStyle={styles.icon}
        />
    </View>
}

///////////////////////////////////////////////////////////////////////////////
export default class Sidebar extends Component {
    render() {
        return <View style={styles.wrapper}>
            <Item icon='supervisor-account'/>
            <Item icon='mail-outline'/>
            <Item icon='photo-camera'/>
        </View>
    }
}


///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: 1,
        borderRightColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    item: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    }
})

///////////////////////////////////////////////////////////////////////////////