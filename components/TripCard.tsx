import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";

import { Text, View } from "./Themed";
import { TripCardData } from "../types";
import Colors from "../constants/Colors";
import { hitSlop } from "../constants/variables";
import useColorScheme from "../hooks/useColorScheme";

export default function TripCard({ type, startTrip, endTrip }: TripCardData) {
  const theme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[theme]["cardBackground"] },
      ]}
    >
      <View style={[styles.frame, styles.iconsContainer]}>
        <Ionicons
          name={type === "business" ? "briefcase" : "person"}
          size={24}
          color={Colors[theme]["iconColor"]}
        />
      </View>
      <View style={[styles.frame, styles.dateContainer]}>
        <Text>
          <Text style={styles.bold}>From:</Text>{" "}
          {format(startTrip, "MM.dd.yyyy p")}
        </Text>
        <Text>
          <Text style={styles.bold}> To:</Text>{" "}
          {format(endTrip, "MM.dd.yyyy p")}
        </Text>
      </View>
      <TouchableOpacity onPress={() => {}} hitSlop={hitSlop}>
        <Ionicons
          name="arrow-forward"
          size={24}
          color={Colors[theme]["iconColor"]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: "transparent",
  },
  container: {
    backgroundColor: "#E4E1E0",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
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
    width: "15%",
    alignItems: "center",
  },
  dateContainer: {
    width: "70%",
    paddingHorizontal: 10,
  },
  bold: {
    fontFamily: "Roboto-Bold",
  },
});
