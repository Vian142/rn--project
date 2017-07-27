import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class BackgroundImage extends Component {
    render() {
        return (
            <Image source={this.props.image}
                style={styles.backgroundImage} >
                {this.props.children}
            </Image>
        )
    }
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

export default BackgroundImage;