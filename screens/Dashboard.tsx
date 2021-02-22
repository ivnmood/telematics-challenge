import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import GaugeElement from "../components/GaugeElement";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export default function Dashboard({
  navigation,
}: StackScreenProps<RootStackParamList, "Dashboard">) {
  return (
    <View style={styles.container}>
      <GaugeElement value={60} size={300} thickness={25} fontSize={35} />
      <Text style={styles.title}>My Driver Score</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={"My Trips"}
          onPress={() => navigation.push("My Trips")}
        />
        <Button
          title={"My Driver Score"}
          onPress={() => navigation.push("My Driver Score")}
        />
        <Button title={"About"} onPress={() => navigation.push("About")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontFamily: "Roboto-Bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
    width: "100%",
  },
});
