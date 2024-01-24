import {
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
  TextInput
} from "react-native";
import { Text, View } from "../components/Themed";
import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import organizations from "../data/organizations.js";
import CausesButton from "../components/CausesButton";
import causes from "../data/causes.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrganizationsFor from "./OrganizationsFor";
import OrgsButton from "../components/OrgsButton";
import OrgDetails from "./OrgDetails";
import DonateModal from "./DonateModal";
import ConfirmModal from "./ConfirmModal";
import ThankYou from "./ThankYou";
import colors from "../Themes/Colors";
import LinkScreen from "./LinkScreen";
import { Ionicons } from '@expo/vector-icons';


export default function Browse() {
  const renderItem = (item) => <CausesButton id={item.id} cause={item.cause} icon={item.icon} />;

  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Browse"
        component={Browse}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="OrganizationsFor"
        component={OrganizationsFor}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="OrgDetails"
        component={OrgDetails}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="LinkScreen"
        component={LinkScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      {/* <HomeStack.Group screenOptions={{ presentation: "modal" }}> */}
      <HomeStack.Screen
        name="Modal"
        component={DonateModal}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="ConfirmModal"
        component={ConfirmModal}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="ThankYou"
        component={ThankYou}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );

  function Browse() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Browse Causes</Text>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          numColumns={2}
          data={causes} // the array of data that the FlatList displays
          renderItem={({ item }) => renderItem(item)} // function that renders each item
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.darkgreen,
    textAlign: "center",
    fontFamily: 'Nunito-Bold',
  },
});
