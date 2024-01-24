import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState, Component } from "react";

import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchBar from "../components/SearchBar";
import organizations from "../data/organizations.js";
import OrgsButton from "../components/OrgsButton";
import OrgDetails from "./OrgDetails";
import DonateModal from "./DonateModal";
import ConfirmModal from "./ConfirmModal";
import ThankYou from "./ThankYou";
import colors from "../Themes/Colors";
import Forms from "./Forms";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import { Fontisto, Ionicons } from "@expo/vector-icons";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      topThreeNames: [],
      topThreeVals: [],
    };
  }

  componentDidMount() {
    const db = getDatabase();
    const reference = ref(db, "donations/");

    let transactions = [];
    let yourDonations = {};

    // function weeksBetween(d1, d2) {
    //   return Math.floor(
    //     Math.abs(d2.getTime() - d1.getTime() / (7 * 24 * 60 * 60 * 1000)
    //   );
    //   return Math.floor(Math.abs((d2 - d1) / (7 * 24 * 60 * 60 * 1000)));
    // }

    onValue(reference, (snapshot) => {
      snapshot.forEach((child) => {
        transactions.push(child.val());

        let donation = child.val();
        let multiplier =
          donation.recurring == "Weekly"
            ? 7 //weeksBetween(new Date(), new Date(2022, 3, 1))
            : 1;

        // calculate total donation vals
        if (donation.orgName in yourDonations) {
          yourDonations[donation.orgName] += donation.donateAmt * multiplier;
        } else {
          yourDonations[donation.orgName] = donation.donateAmt;
        }
      });

      let topThreeNames = ["", "", ""];
      let topThreeVals = [0, 0, 0];

      // calculate top three values in array
      for (let orgName in yourDonations) {
        if (yourDonations[orgName] > topThreeVals[0]) {
          // new 1st place
          topThreeNames[2] = topThreeNames[1];
          topThreeNames[1] = topThreeNames[0];
          topThreeNames[0] = orgName;
          topThreeVals[2] = topThreeVals[1];
          topThreeVals[1] = topThreeVals[0];
          topThreeVals[0] = yourDonations[orgName];
        } else if (yourDonations[orgName] > topThreeVals[1]) {
          // new 2nd place
          topThreeNames[2] = topThreeNames[1];
          topThreeNames[1] = orgName;
          topThreeVals[2] = topThreeVals[1];
          topThreeVals[1] = yourDonations[orgName];
        } else if (yourDonations[orgName] > topThreeVals[2]) {
          // new 3rd place
          topThreeNames[2] = orgName;
          topThreeVals[2] = yourDonations[orgName];
        }
      }

      transactions = transactions.reverse();
      this.setState({
        transactions: transactions,
        topThreeNames: topThreeNames,
        topThreeVals: topThreeVals,
      });
    });
  }

  renderItem(item) {
    return (
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.trans_info}>
            {item.date}: {item.orgName} ({item.recurring})
          </Text>
          <Text style={styles.amount}> - ${item.donateAmt}</Text>
        </View>
      </ScrollView>
    );
  }

  renderYourDonations() {
    return (
      <View>
        <View style={styles.donations_row}>
          <View style={styles.circle}>
            <Text style={styles.number}>1</Text>
          </View>
        <Text style={styles.topNames}>{this.state.topThreeNames[0]}</Text>
        <Text style={styles.topValues}>${this.state.topThreeVals[0]}</Text>
        </View>
        <View style={styles.donations_row}>
        <View style={styles.circle}>
            <Text style={styles.number}>2</Text>
          </View>
        <Text style={styles.topNames}>{this.state.topThreeNames[1]}</Text>
        <Text style={styles.topValues}>${this.state.topThreeVals[1]}</Text>
        </View>
        <View style={styles.donations_row}>
        <View style={styles.circle}>
            <Text style={styles.number}>3</Text>
          </View>
        <Text style={styles.topNames}>{this.state.topThreeNames[2]}</Text>
        <Text style={styles.topValues}>${this.state.topThreeVals[2]}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <View style={styles.donations_back}>
          <Text style={styles.headers}>YOUR TOP DONATIONS</Text>
          {this.renderYourDonations()}
        </View>
        <View style={styles.trans_back}>
          <Text style={styles.headers}>RECENT TRANSACTIONS</Text>
          {/* {this.state.transactions.map((item) => (
            <Text>potato</Text>
          ))} */}
          <FlatList
            data={this.state.transactions} // the array of data that the FlatList displays
            renderItem={({ item }) => this.renderItem(item)} // function that renders each item
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Pressable
          style={styles.bottom_buttons}
          onPress={() => this.props.navigation.navigate("Forms")}
        >
          <View style={styles.forms_container}>
            <Text style={styles.bottom_headers}>FORMS</Text>
            <Image
              style={styles.arrow}
              source={require("../data/icons/right_arrow.png")}
            />
          </View>
        </Pressable>
      </View>
    );
  }
}
export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightgreen,
  },

  donations_row: {
    //marginTop: '%',
    flexDirection: 'row', 
    marginRight: '8%',
    justifyContent: 'flex-start',
    marginBottom: '7%',
  },

  number: {
    fontSize: 17, 
    color: colors.darkgreen,
    fontFamily: 'Nunito-Bold', 
    alignSelf: 'center'
  }, 

  circle: {
    borderColor: colors.darkgreen,
    borderWidth: 2, 
    height: 30, 
    width: 30, 
    borderRadius: 20, 
    backgroundColor: colors.lightgreen,
    justifyContent: 'center',
    marginRight: '8%',
    marginLeft: '8%',
  }, 

  donations_back: {
    width: "90%",
    height: "30%",
    borderRadius: 16,
    alignItems: 'center'
  },

  topNames: {
    fontFamily: 'Nunito-Bold',
    alignSelf: 'center',
    fontSize: 17,
    marginRight: '8%',
  }, 

  topValues: {
    fontFamily: 'Nunito',
    color: colors.darkgreen,
    alignSelf: 'center',
    fontSize: 17,
  },

  arrow: {
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: '5%',
  },

  forms_container: {
    flexDirection: "row",
  },

  row: {
    flexDirection: "row",
    paddingLeft: 25,
    paddingVertical: 10,
  },

  date: {
    fontSize: 15,
    fontStyle: "italic",
    color: "gray",
    fontFamily: "Nunito",
  },

  orgName: {
    fontFamily: "Nunito",
  },

  recurring: {
    fontFamily: "Nunito",
  },

  amount: {
    fontSize: 15,
    marginRight: 10,
    color: colors.darkgreen,
  },

  title: {
    paddingTop: 20,
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: "Nunito-Bold",
  },

  headers: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 20,
    color: colors.darkgreen,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Nunito-Bold",
  },

  pie_chart: {},

  trans_back: {
    marginTop: 20,
    width: "90%",
    height: "35%",
    borderRadius: 16,
  },

  recent_trans: {},

  bottom_buttons: {
    marginTop: '8%',
    width: "80%",
    height: "10%",
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 2 },
    alignItems: "center",
    justifyContent: "center",
  },

  bottom_headers: {
    //paddingTop: 20,
    fontSize: 30,
    color: colors.darkgreen,
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    marginLeft: '30%',
  },
  trans_info: {
    fontSize: 15,
  },
});
