import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState, Component } from "react";
import EditSettings from "./EditSettings";
import Settings from "./Settings";

export default function SettingsNav() {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="EditSettings"
        component={EditSettings}
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
