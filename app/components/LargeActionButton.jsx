import { createIconSetFromFontello } from "@expo/vector-icons";
import { StyleSheet, Pressable, Button, SafeAreaView } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../Themes/Colors";
import EStyleSheet from "react-native-extended-stylesheet";

const LargeActionButton = ({ label, onPress, active }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        active ? styles.activeButton : styles.disabledButton,
        pressed ? { opacity: 0.9 } : {},
      ]}
      onPress={onPress}
      disabled={!active}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  activeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    maxHeight: "5rem",
    height: "4.5rem",

    borderRadius: 30,
    elevation: 3,
    backgroundColor: Colors.darkgreen,
  },

  disabledButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,

    borderRadius: 30,
    elevation: 3,
    backgroundColor: Colors.darkgreen,
    opacity: 0.2,
  },

  text: {
    fontSize: 42,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LargeActionButton;
