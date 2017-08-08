///////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
///////////////////////////////////////////////////////////////////////////////
export default class Information extends Component {
    _onPressButton() {
        console.log('You tapped the button!')
    }
    render() {
        return <View style={styles.information}>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>SSN:</Text>
                <Text style={styles.rowTextValue}>XXXX-XX-3008</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>ROLE:</Text>
                <Text style={styles.rowTextValue}>Agent</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>DOB:</Text>
                <Text style={styles.rowTextValue}>11/07/79</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>ALIAS:</Text>
                <Text style={styles.rowTextValue}>Unknown</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>OCCUPATION:</Text>
                <Text style={styles.rowTextValue}>Unknown</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>BALANCE:</Text>
                <Text style={styles.rowTextValue}>$1.100.159</Text>
            </View>
            <View style={styles.rowText}>
                <Text style={styles.rowTextKey}>ADDRESS:</Text>
                <Text style={styles.rowTextValue}>Washington, DC, Mextiton, asda sdsadasd 135</Text>
            </View>
            <View style={styles.btnWrap}>
                <Button
                    onPress={this._onPressButton}
                    title='More' />
            </View>
        </View>
    }
}


///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    information: {
        paddingTop: 5
    },
    rowText: {
        paddingTop: 2,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    rowTextKey: {
        flex: 1.1,
        marginRight: 5,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 'bold'
    },
    rowTextValue: {
        flex: 2,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.95)',
        fontWeight: 'bold',
        textAlign: 'right'
    }
})

///////////////////////////////////////////////////////////////////////////////