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
import colors from "../Themes/Colors";

const OrgsButton = ({ name, description, id, logo, info, url, cause}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.org_button}>
      <Pressable
        onPress={() => navigation.navigate("OrgDetails", {name: name, description: description, id:id, logo:logo, info:info, url:url, cause:cause})}
        style={{width: '100%'}}
      >
        {/* <Image style={styles.logo} source={require(organization.image)} /> */}
        <View style={{ flexDirection: "row", width: '100%' }}>
          <Image style={styles.logo} source={logo} />
          <View style={styles.org_title_des}>
            <Text numberOfLines = {1} style={styles.org_title}>{name}</Text>
            <Text numberOfLines = {2} style={styles.org_description}>{description}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  org_button: {
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    borderRadius: 16,
    height: 100,
    width: "92%",
    flexDirection: "row",
    paddingTop: 10,
    borderColor: colors.gray,
    borderWidth: 0.25,
  },

  org_title_des: {
    width: "75%",
    // maxWidth: "90%",
    // marginLeft: 10,
    paddingLeft: '3%',
  },

  org_title: {
    top: '15%',
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    fontFamily: 'Nunito-Bold',
    marginRight: '5%'
  },

  org_description: {
    flexWrap: "wrap",
    marginTop: '5%',
    marginRight: '5%',
    fontSize: 12,
    color: "gray",
    fontFamily: 'Nunito',
  },

  logo: {
    //top: 10,
    //height: 50,
    // width: 70,
    //marginBottom: '10%',
    //marginTop: '10%',
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    marginLeft: '2%',
    height: '80%',
    width: '20%',
    resizeMode: "contain",
  },
});

export default OrgsButton;
