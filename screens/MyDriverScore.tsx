import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import ScoreCard from "../components/ScoreCard";
import { Text, View } from "../components/Themed";
import { ScoreCardData } from "../types";

export default function MyDriverScore() {
  const data: ScoreCardData[] = [
    {
      id: "111",
      title: "My Driver Score",
      score: 60,
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quidem",
    },
    {
      id: "222",
      title: "Acceleration Score",
      score: 73,
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem commodi, dicta iusto nemo quia.",
    },
    {
      id: "333",
      title: "Braking Score",
      score: 55,
      recommendation: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      id: "444",
      title: "Cornering Score",
      score: 43,
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate ea est.",
    },
    {
      id: "555",
      title: "Eco Driving Score",
      score: 68,
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quidem",
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
