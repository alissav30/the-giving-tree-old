import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import colors from "../Themes/Colors";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ThankYou() {
  const navigation = useNavigation();
    return (
      <View style={styles.screen}>
        <Text style={styles.thanks_text}>Thank you for your donation!</Text>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.button}>
          <Text style={styles.nav_text}>See your GivingTree's progress</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  thanks_text: {
    fontFamily: "Nunito-Bold",
    fontSize: 40,
    fontWeight: "bold",
    color: colors.darkgreen,
    padding: 30,
    textAlign: "center",
  },
  go_home: {
    borderRadius: 15,
    maxWidth: "70%",
    backgroundColor: colors.lightblue,
  },
  button: {
    backgroundColor: colors.lightgreen,
    alignSelf: "center",
    borderRadius: 30,
  },
  nav_text: {
    fontFamily: "Nunito-Bold",
    flexWrap: "wrap",
    fontSize: 20,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
