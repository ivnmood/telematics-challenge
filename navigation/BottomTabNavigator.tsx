import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Dashboard from "../screens/Dashboard";
import {
  BottomTabParamList,
  TabFourParamList,
  TabOneParamList,
  TabThreeParamList,
  TabTwoParamList,
} from "../types";
import MyDriverScore from "../screens/MyDriverScore";
import MyTrips from "../screens/MyTrips";
import About from "../screens/About";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Driver Score"
        component={MyDriverScoreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Trips"
        component={MyTripsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function DashboardNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerTitle: "Dashboard" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function MyDriverScoreNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="My Driver Score"
        component={MyDriverScore}
        options={{ headerTitle: "My Driver Score" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function MyTripsNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="My Trips"
        component={MyTrips}
        options={{ headerTitle: "My Trips" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function AboutNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="About"
        component={About}
        options={{ headerTitle: "About" }}
      />
    </TabFourStack.Navigator>
  );
}
