import * as React from "react";
import { ColorSchemeName } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import Dashboard from "../screens/Dashboard";
import MyDriverScore from "../screens/MyDriverScore";
import MyTrips from "../screens/MyTrips";
import About from "../screens/About";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen
        name="My Driver Score"
        component={MyDriverScore}
        options={{ title: "My Driver Score" }}
      />
      <Stack.Screen
        name="My Trips"
        component={MyTrips}
        options={{ headerTitle: "My Trips" }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerTitle: "About" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
