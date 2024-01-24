import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function Form8283() {
    const source = require('../assets/faketaxform.pdf')
    return (
        <View style={styles.container}>
            <WebView
                source={source}
                style={styles.pdf}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});