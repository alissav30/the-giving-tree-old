import React, { Component, useState, useEffect } from "react";
import {
  OptionType,
  Select,
  State,
} from "@mobile-reality/react-native-select-pro";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import SearchBar from "../components/SearchBar";
import organizations from "../data/organizations.js";
import OrgsButton from "../components/OrgsButton";
import orgs_by_cause from "../data/orgs-by-cause";

import colors from "../Themes/Colors";
//import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import causes from "../data/causes";
import { useRoute } from "@react-navigation/native";

class OrganizationsFor extends Component {
  constructor(props) {
    super(props);

    let labels = [
      { value: "0", label: "Alphabetical" },
      {
        value: "1",
        label: "Most in Need",
      },
    ];

    console.log(orgs_by_cause[this.props.route.params.cause.cause_description]);
    this.state = {
      organizations: orgs_by_cause[this.props.route.params.cause],
      labels: labels,
    };
  }

  renderItem(item) {
    return (
      <View style={styles.button}>
        <OrgsButton
          name={item.name}
          id={item.id}
          description={item.description}
          logo={item.logo}
          info={item.info}
          url={item.url}
          cause={item.cause}
        />
      </View>
    );
  }

  // search name only searches by org name rn. have to add more logic to search by description or anything
  searchName(input) {
    let searchData = orgs_by_cause[this.props.route.params.cause].filter(
      (item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
      }
    );

    this.setState({
      organizations: searchData,
    });
  }

  // _selectHelper = (option) => () => {
  //   const [selected, setSelected] = useState<OptionType | null>(null);
  //   setSelected(option);

  //   return;
  // };

  onSelect(option) {
    //this._selectHelper(option);
    let labels = [
      { value: "0", label: "Alphabetical" },
      {
        value: "1",
        label: "Most in Need",
      },
    ];



    if (option.label == "Alphabetical") {
      this.setState({
        organizations: orgs_by_cause[this.props.route.params.cause],
        labels: labels,
      });
    } else {
      this.setState({
        organizations: orgs_by_cause[this.props.route.params.cause].reverse(),
        labels: labels.reverse(),
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{(this.props.route.params.cause)}</Text>
        <View>
          <TextInput
            placeholder="Search Organization"
            style={styles.search_bar}
            onChangeText={(input) => {
              this.searchName(input);
            }}
          />
        </View>
        <Select
          placeholderText="Sort"
          clearable={false}
          closeDropdownOnSelect={true}
          selectContainerStyle={styles.selectContainer}
          selectControlStyle={styles.selectControl}
          selectControlButtonsContainerStyle={styles.selectControlContainer}
          optionTextStyle={styles.optionText}
          optionsListStyle={styles.optionList}
          selectControlTextStyle={styles.sortText}
          defaultOption={this.state.labels[0]}
          onSelect={(option) => this.onSelect(option)}
          options={this.state.labels}
        />
        <ScrollView>
          <FlatList
            style={styles.list}
            data={this.state.organizations} // the array of data that the FlatList displays
            renderItem={({ item }) => this.renderItem(item)} // function that renders each item
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  button: {
    marginBottom: 20,
    width: "100%",
  },

  // upper region (title and description)
  upper: {
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    marginHorizontal: '5%',
    marginBottom: '5%'
  },

  list: {
    marginTop: "3%",
    marginLeft: "6%",
  },

  description: {
    fontSize: 13,
    color: "black",
    alignSelf: "center",
    marginLeft: "6%",
    marginRight: "6%",
    marginTop: "7%",
    marginBottom: "6%",
    fontFamily: "Nunito",
  },

  // search bar and sort function
  search_sort: {},

  search_bar: {
    height: 30,
    width: 324,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 0.3,
    textAlign: "center",
    marginBottom: "6%",
    alignSelf: "center",
  },

  selectContainer: {
    alignSelf: "flex-start",
    marginLeft: "8%",
    width: "35%",
    color: "gray",
    borderWidth: 0,
    backgroundColor: "white",
    tintColor: "white",
  },

  selectControl: {
    width: "100%",
    color: "gray",
    borderColor: "gray",
    borderRadius: 20,
    borderWidth: 0.3,
  },

  selectControlContainer: { color: colors.gray },

  optionText: {
    color: colors.gray,
  },

  optionList: {
    width: "100%",
    color: "gray",
    borderColor: "gray",
    borderWidth: 0.3,
  },

  sortText: {
    color: colors.gray,
  },
  // sort_row: {
  //   flexDirection: "row",
  //   height: "5%",
  // },
  // sort_button: {
  //   width: "25%",
  //   height: "100%",
  //   marginVertical: 10,
  //   marginRight: "60%",
  //   borderRadius: 20,
  //   borderColor: "gray",
  //   borderWidth: 0.3,
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   flexDirection: "row",
  // },

  // sort_text: {
  //   fontSize: 15,
  //   color: colors.gray,
  //   marginLeft: 10,
  //   alignSelf: "center",
  // },
  // down_arrow: {
  //   resizeMode: "contain",
  //   height: "50%",
  //   width: "20%",
  //   marginRight: 5,
  // },

  // lower region (orgs)
  lower: {
    top: "10%",
    paddingBottom: "%10",
    alignItems: "center",
  },
});

export default OrganizationsFor;
