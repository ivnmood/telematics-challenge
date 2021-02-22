import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import GaugeElement from "../components/GaugeElement";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <GaugeElement value={60} size={300} thickness={25} fontSize={35} />
      <Text style={styles.title}>My Driver Score</Text>
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
});
