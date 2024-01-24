import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState, Component } from "react";

import Forms from "./Forms";
import ProfileComponent from "./ProfileComponent";
import Form8283 from "./Form8283";
import ConfirmDownload from "./ConfirmDownload";
import TurboTax from "./TurboTax";

export default function Profile() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Forms"
        component={Forms}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="Form8283"
        component={Form8283}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="ConfirmDownload"
        component={ConfirmDownload}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
      <HomeStack.Screen
        name="TurboTax"
        component={TurboTax}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "black",
          presentation: "card",
        }}
      />
    </HomeStack.Navigator>
  );
}
