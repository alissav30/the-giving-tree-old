import React from "react";
import { StyleSheet, Pressable, Button, SafeAreaView } from "react-native";
import { Text, View } from "../../components/Themed";
import Colors from "../../Themes/Colors";

const AmountBtn = ({ label, onPress, active }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        active ? styles.activeButton : styles.button,
        pressed ? { opacity: 0.9 } : {},
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: "2%",
    paddingHorizontal: 10,
    width: 90,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderColor: "transparent",
    borderWidth: 2,

    borderRadius: 30,
    elevation: 3,
    backgroundColor: Colors.lightblue,
  },

  activeButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: "2%",
    paddingHorizontal: 10,
    width: 90,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderColor: "black",
    borderWidth: 2,

    borderRadius: 30,
    elevation: 3,
    backgroundColor: Colors.lightblue,
  },

  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default AmountBtn;
