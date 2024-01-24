import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import AmountBtn from "../components/DonationModal/AmountBtn";
import RecurringBtn from "../components/DonationModal/RecurringBtn";
import LargeActionButton from "../components/LargeActionButton";
import React, { Component } from "react";
import Colors from "../Themes/Colors";
import EStyleSheet from "react-native-extended-stylesheet";

import { getDatabase, ref, onValue, set, push } from "firebase/database";

class ConfirmModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donateAmt: 0,
      recurring: "",
      customAmt: "",
      donateBtnState: [false, false, false, false, false, false],
      recBtnState: [false, false, false, false],
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let dateString = month + "/" + date + "/" + year;

    const db = getDatabase();

    const reference = ref(db, "donations/");
    push(reference, {
      donateAmt: this.props.route.params.donateAmt,
      recurring: this.props.route.params.recurring,
      orgName: this.props.route.params.name,
      date: dateString,
    });

    this.props.navigation.navigate("ThankYou");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.amountContainer}></View>
        {/* <Image
          style={styles.bar}
          source={require("../assets/images/divider-bar.png")}
        /> */}

        <Text style={styles.selectText}>Your Donation:</Text>
        <View style={styles.textContainer}>
          <View style={styles.tContainer}>
            <Text style={styles.leadText}>
              Organization: {this.props.route.params.name}
            </Text>
            {/* <View style={styles.textLeftMargin}></View>
            <Text style={styles.text}>{this.props.route.params.name}</Text> */}
          </View>
          <View style={styles.tContainer}>
            <Text style={styles.leadText}>
              Amount: ${this.props.route.params.donateAmt}
            </Text>
            {/* <View style={styles.textLeftMargin}></View>
            <Text style={styles.text}>
              ${this.props.route.params.donateAmt}
            </Text> */}
          </View>
          <View style={styles.tContainer}>
            <Text style={styles.leadText}>
              Frequency: {this.props.route.params.recurring}
            </Text>
            {/* <View style={styles.textLeftMargin}></View>
            <Text style={styles.text}>{this.props.route.params.recurring}</Text> */}
          </View>
        </View>

        <View style={styles.actionContainer}>
          <LargeActionButton
            label={"CONFIRM"}
            onPress={this.onPress}
            active={true}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  container: { height: "100%" },

  amountContainer: {},

  selectText: {
    fontFamily: "Nunito-Bold",
    marginTop: "50%",
    fontSize: 48,
    textAlign: "center",
    marginBottom: 15,
    color: "black",
    fontWeight: "bold",
  },

  textContainer: {
    marginTop: "15%",
    borderColor: "#dddddd",
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 50,
    //alignItems: "center",
    textAlign: "left",
    marginBottom: "10%",
    flexWrap: "wrap",
  },

  tContainer: {
    flexDirection: "row",
    fontSize: 24,
  },

  leadText: {
    fontFamily: "Nunito",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 15,
    color: "black",
    marginLeft: "10%",
    marginRight: "10%",
  },

  textLeftMargin: { width: "5%" },

  text: {
    fontSize: 24,
    flexWrap: "wrap",
    width: "40%",
    fontFamily: "Nunito",
  },

  actionContainer: {
    marginTop: "10%",
    width: "70%",
    alignSelf: "center",
    borderRadius: 30,
  },

  "@media (min-height: 600) and (max-height: 700)": {
    selectText: {
      marginTop: "15%",
    },
    freqText: {
      marginTop: "0%",
    },
  },
});

export default ConfirmModal;
