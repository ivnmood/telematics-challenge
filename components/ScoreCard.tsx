import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { ScoreCardData } from "../types";
import GaugeElement from "./GaugeElement";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function ScoreCard({ data }: { data: ScoreCardData }) {
  const { title, score, recommendation } = data;
  const theme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[theme]["cardBackground"] },
      ]}
    >
      <View style={[styles.frame, styles.iconsContainer]}>
        <GaugeElement value={score} size={100} thickness={7} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.frame, styles.dateContainer]}>
        <Text style={styles.title}>Recommendation:</Text>
        <Text>{recommendation}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "transparent",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 180,
    borderRadius: 7,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconsContainer: {
    width: "50%",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 15,
  },
  title: {
    fontSize: 15,
    fontFamily: "Roboto-Bold",
  },
  dateContainer: {
    width: "50%",
    paddingHorizontal: 10,
  },
});
