import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import AmountBtn from "../components/DonationModal/AmountBtn";
import RecurringBtn from "../components/DonationModal/RecurringBtn";
import LargeActionButton from "../components/LargeActionButton";
import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Colors from "../Themes/Colors";

class DonateModal extends Component {
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
    this.onDonatePress = this.onDonatePress.bind(this);
  }

  onDonatePress() {
    let amt =
      this.state.customAmt == "" ? this.state.donateAmt : this.state.customAmt;

    this.props.navigation.navigate("ConfirmModal", {
      name: this.props.route.params.params.name,
      donateAmt: amt,
      recurring: this.state.recurring,
    });
  }

  onText(customAmt) {
    let newState = [false, false, false, false, false, false];
    this.setState({ customAmt: customAmt, donateBtnState: newState });
  }

  onPress(amount, index) {
    let newState = [false, false, false, false, false, false];
    if (!this.state.donateBtnState[index]) {
      newState[index] = true;
    } else {
      amount = 0;
    }

    this.setState({
      donateAmt: amount,
      donateBtnState: newState,
      customAmt: "",
    });
  }

  onRecPress(recurr, index) {
    let newState = [false, false, false, false];
    if (!this.state.recBtnState[index]) {
      newState[index] = true;
    } else {
      recurr = "";
    }

    this.setState({ recurring: recurr, recBtnState: newState });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.amountContainer}>
          <Text style={styles.selectText}> Select Amount</Text>
          <View style={styles.rowContainer}>
            <AmountBtn
              label={"$10"}
              onPress={() => this.onPress(10, 0)}
              active={this.state.donateBtnState[0]}
            />
            <AmountBtn
              label={"$25"}
              onPress={() => this.onPress(25, 1)}
              active={this.state.donateBtnState[1]}
            />
            <AmountBtn
              label={"$50"}
              onPress={() => this.onPress(50, 2)}
              active={this.state.donateBtnState[2]}
            />
          </View>
          <View style={styles.rowContainer}>
            <AmountBtn
              label={"$100"}
              onPress={() => this.onPress(100, 3)}
              active={this.state.donateBtnState[3]}
            />
            <AmountBtn
              label={"$250"}
              onPress={() => this.onPress(250, 4)}
              active={this.state.donateBtnState[4]}
            />
            <AmountBtn
              label={"$500"}
              onPress={() => this.onPress(500, 5)}
              active={this.state.donateBtnState[5]}
            />
          </View>

          <Image
            style={styles.orBar}
            source={require("../assets/images/or-bar.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="20.00"
            keyboardType="numeric"
            onChangeText={(customAmt) => this.onText(customAmt)}
            value={this.state.customAmt}
          />
        </View>
        <View style={styles.freqContainer}>
          <Text style={styles.freqText}>Frequency</Text>
          <View style={styles.rowContainer}>
            <RecurringBtn
              label={"One Time"}
              onPress={() => this.onRecPress("One Time", 0)}
              active={this.state.recBtnState[0]}
            />
            <RecurringBtn
              label={"Weekly"}
              onPress={() => this.onRecPress("Weekly", 1)}
              active={this.state.recBtnState[1]}
            />
          </View>
          <View style={styles.rowContainer}>
            <RecurringBtn
              label={"Monthly"}
              onPress={() => this.onRecPress("Monthly", 2)}
              active={this.state.recBtnState[2]}
            />
            <RecurringBtn
              label={"Annually"}
              onPress={() => this.onRecPress("Annually", 3)}
              active={this.state.recBtnState[3]}
            />
          </View>

          <View>
            <View></View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.fullSize}>
              <LargeActionButton
                label={"DONATE"}
                onPress={() => this.onDonatePress()}
                active={
                  (this.state.donateAmt > 0 || this.state.customAmt != "") &&
                  this.state.recurring != ""
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignSelf: "center",
  },

  amountContainer: { flex: 1 },

  freqContainer: { flex: 1 },

  selectText: {
    fontFamily: "Nunito-Bold",
    marginTop: "20%",
    maxHeight: "100%",
    fontSize: 26,
    marginLeft: "12%",
    textAlign: "left",
    marginBottom: "5%",
    color: "black",
    fontWeight: "bold",
  },

  freqText: {
    fontFamily: "Nunito-Bold",
    fontSize: 26,
    marginTop: "15%",
    marginLeft: "12%",
    textAlign: "left",
    marginBottom: "5%",
    color: "black",
    fontWeight: "bold",
  },

  rowContainer: {
    height: "20%",
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  orBar: {
    width: "70%",
    margin: 0,
    alignSelf: "center",
    resizeMode: "contain",
    height: "5%",
  },

  textInput: {
    fontFamily: "Nunito",
    borderRadius: 5,
    borderWidth: 1,
    height: "10%",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginHorizontal: "15%",
    marginTop: 15,
    marginBottom: "15%",
  },

  bar: {
    width: "100%",
    margin: 50,
    alignSelf: "center",
    resizeMode: "contain",
    height: 50,
  },

  actionContainer: {
    width: "100%",
  },

  fullSize: {
    height: "100%",
    marginVertical: "10%",
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

export default DonateModal;
