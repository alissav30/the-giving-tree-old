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
import ConfirmDownload from "./ConfirmDownload";

export default function Forms() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>

      <View style={styles.tax_forms}>
        <Text style={styles.heading}>Tax Form 8283</Text>
        <View style={styles.button_row}>
          <Pressable style={styles.view_button_1} onPress={() => navigation.navigate("Form8283")}>
            <Text style={styles.view_text}>View 2021</Text>
          </Pressable>
          <View style={styles.share_button}>
            <Pressable onPress={() => navigation.navigate("TurboTax")}>
              <Image source={require("../data/icons/share.png")} />
              </Pressable>
          </View>
          <Pressable style={styles.download_button} onPress={() => navigation.navigate("ConfirmDownload")}>
            <Image source={require("../data/icons/download.png")} />
          </Pressable >
        </View>
      </View>

      <View style={styles.past_transactions}>
        <Text style={styles.heading}>Past Transactions</Text>
        <View style={styles.button_row}>
          <View style={styles.view_button_2}>
            <Text style={styles.view_text}>View 2022</Text>
          </View>
          <Pressable style={styles.download_button} onPress={() => navigation.navigate("ConfirmDownload")}>
            <Image source={require("../data/icons/download.png")} />
          </Pressable >
        </View>
        <View style={styles.button_row}>
          <View style={styles.view_button_2}>
            <Text style={styles.view_text}>View 2021</Text>
          </View>
          <Pressable style={styles.download_button} onPress={() => navigation.navigate("ConfirmDownload")}>
            <Image source={require("../data/icons/download.png")} />
          </Pressable >
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.lightgreen,
  },
  title: {
    paddingTop: "20%",
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: 'Nunito-Bold',
  },
  tax_forms: {
    height: '20%',
    backgroundColor: "white",
    width: "85%",
    marginVertical: 15,
    borderRadius: 30,
  },
  past_transactions: {
    height: '30%',
    backgroundColor: "white",
    width: "85%",
    marginVertical: 15,
    borderRadius: 30,
  },
  heading: {
    flex: 1,
    textAlign: "left",
    marginTop: 20,
    marginLeft: 20,
    color: colors.darkgreen,
    fontSize: 25,
    fontFamily: 'Nunito',
  },
  button_row: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 15,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  view_button_1: {
    backgroundColor: "white",
    height: 50,
    width: 150,
    borderRadius: 30,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 3 },
  },
  view_button_2: {
    backgroundColor: "white",
    height: 50,
    width: 200,
    borderRadius: 30,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 3 },
  },
  view_text: {
    color: "darkgrey",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: 'Nunito-Bold',
  },
  share_button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.lightgreen,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 3 },
    alignItems: "center",
  },
  download_button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.lightblue,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 3 },
    alignItems: "center",
  },
});
