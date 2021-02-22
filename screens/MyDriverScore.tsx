import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import ScoreCard from "../components/ScoreCard";
import { Text, View } from "../components/Themed";
import { scoreData as data } from "../mock.json";

export default function MyDriverScore() {
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
        renderItem={({ item }) => <ScoreCard data={item} />}
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
