import {
    StyleSheet,
    Image,
    SafeAreaView,
    Pressable,
    ScrollView,
  } from "react-native";
  import { Text, View } from "../components/Themed";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import colors from '../Themes/Colors';



  const CausesButton = ({ id, cause, icon}) => {
    const navigation = useNavigation();
    console.log(cause);
    return (
      <Pressable
        style={styles.causes_button}
        onPress={() => navigation.navigate("OrganizationsFor", {cause:cause})}
      >
        <View style={styles.info}>
          <Image style={styles.icon} source={icon}/>
          <Text style={styles.cause_name}> {cause}</Text>
        </View> 
        
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    causes_button: {
      backgroundColor: colors.lightgreen,
      shadowColor: "gray",
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 2 },
      borderRadius: 100,
      height: 150,
      width: 150,
      margin: 15,
      marginHorizontal: 20,
      justifyContent: 'center'
    },
    info :{
      alignItems: 'center',
      width: '95%',
      justifyContent: 'center',
      backgroundColor: colors.lightgreen,
      borderRadius: 100,
    },
    cause_name: {
      fontSize: 16,
      color: "black",
      fontFamily: 'Nunito-Bold',
      textAlign: 'center',
      color: colors.darkgreen,
    },
    icon: {
      resizeMode: 'contain',
      color: colors.darkgreen,
      height: 50, 
      width: 50,
      marginBottom: 5
    }
  });
  
  export default CausesButton;
  