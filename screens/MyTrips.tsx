import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import TripCard from "../components/TripCard";
import { tripData as data } from "../mock.json";

export default function MyTrips() {
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
        renderItem={({ item }) => (
          <TripCard
            type={item.type}
            endTrip={item.endTrip}
            startTrip={item.startTrip}
          />
        )}
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
