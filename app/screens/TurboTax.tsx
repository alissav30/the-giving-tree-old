import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { WebView } from "react-native-webview";

export default function TurboTax() {  
    return (
      <WebView
          source={{uri: 'https://myturbotax.intuit.com'}}/>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
});