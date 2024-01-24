import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { WebView } from "react-native-webview";

export default function LinkScreen({route}) {  
    const params = route.params;
    console.log(params.url);
    return (
      <WebView
          source={{uri: params.url}}/>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
});