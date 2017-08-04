///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import users from '../../data/users';
import Row from './Row';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';

const bgImage = require('../SignIn/background.jpg');


///////////////////////////////////////////////////////////////////////////////
export default class UsersList extends Component {
    constructor() {
        super();
        this._keyExtractor = this._keyExtractor.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }
    _keyExtractor = (item, index) => item._id;
    _renderItem = ({ item }) => <Row data={item} />;
    render() {
        return <BackgroundImage image={bgImage}>
            <FlatList
                style={styles.wrapper}
                data={users}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        </BackgroundImage>
    }
}

///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    }
})

///////////////////////////////////////////////////////////////////////////////