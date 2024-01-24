import React, {Component} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.searchInput}
                placeholder= "Search for an organization"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        width: '100%',
        height: 50, 
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: 'black',
         
    }, 

    searchInput:{
        width: '100%',
        height: '100%', 
        fontSize: 14,
        paddingLeft: 10,
    }
})

export default SearchBar;