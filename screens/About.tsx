import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { version } from "../package.json";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"\t"}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea
        id non porro rem. Aspernatur atque culpa doloribus est explicabo id
        itaque nam, necessitatibus neque nulla praesentium quae quas repellendus
        similique sit voluptas voluptatem! Beatae consequuntur deleniti ex
        fugiat fugit id inventore itaque laudantium magnam magni, maiores modi
        odit officia placeat qui quidem quis quisquam rem repellat voluptatem.
        Aliquam, fugiat!
      </Text>
      <Text style={styles.text}>
        {"\t"}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
        debitis deleniti deserunt dicta eaque error explicabo fuga harum illo
        ipsam ipsum iure maxime molestias nihil quo ullam vel voluptatum.
        Accusamus amet atque consequuntur ea esse nam nemo nulla veritatis! Ab
        architecto at consequatur debitis dignissimos dolore doloremque eligendi
        error impedit laborum minima mollitia natus numquam, optio qui
        recusandae rerum sapiente soluta ullam unde vel voluptas, voluptates.
        Adipisci assumenda at blanditiis debitis deserunt dolorem doloribus
        harum incidunt iure magnam nam nihil possimus quisquam, quos rerum
        soluta, sunt suscipit tempora ut voluptas.
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.versionText}>Version: {version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    margin: 20,
    textAlign: "justify",
  },
  versionText: {
    fontFamily: "Roboto-Bold",
  },
  separator: {
    marginBottom: 20,
    height: 1,
    width: "80%",
  },
});
