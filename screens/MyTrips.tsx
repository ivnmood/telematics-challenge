import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import TripCard from "../components/TripCard";
import { TripCardData } from "../types";

export default function MyTrips() {
  const data: TripCardData[] = [
    {
      id: "111",
      type: "business",
      startTrip: new Date(2021, 1, 1, 10, 15),
      endTrip: new Date(2021, 1, 1, 12, 30),
    },
    {
      id: "222",
      type: "personal",
      startTrip: new Date(2020, 12, 31, 23, 15),
      endTrip: new Date(2021, 1, 1, 10, 15),
    },
    {
      id: "333",
      type: "business",
      startTrip: new Date(2020, 12, 31, 23, 15),
      endTrip: new Date(2021, 1, 1, 10, 15),
    },
    {
      id: "444",
      type: "personal",
      startTrip: new Date(2020, 12, 31, 23, 15),
      endTrip: new Date(2021, 1, 1, 10, 15),
    },
    {
      id: "555",
      type: "business",
      startTrip: new Date(2020, 12, 31, 23, 15),
      endTrip: new Date(2021, 1, 1, 10, 15),
    },
  ];

  if (!data.length) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Text>No items</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TripCard data={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainerStyle: {
    paddingTop: 15,
  },
});
