import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image
} from "react-native";
import colors from "../Themes/Colors";
import {useNavigation } from '@react-navigation/native';

export default function ConfirmDownload() {
  const navigation = useNavigation();
    return (
      <View style={styles.screen}>
        <Text style={styles.download_text}>Download Successful!</Text>
        <Image style={styles.icon} source={require("../data/icons/downloaded.png")}></Image>
        <Pressable
          onPress={() => navigation.goBack()} 
          style={styles.button}>
          <Text style={styles.nav_text}>Go Back</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  download_text: {
    fontSize: 45,
    fontFamily: 'Nunito-Bold',
    color: colors.darkgreen,
    margin: 5,
    textAlign: "center",
    
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 30
  },
  go_home: {
    borderRadius: 10,
    maxWidth: "70%",
    backgroundColor: colors.lightblue,
  },
  button: {
    backgroundColor: colors.lightgreen,
    alignSelf: "center",
    borderRadius: 30,
  },
  nav_text: {
    flexWrap: "wrap",
    fontSize: 30,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
