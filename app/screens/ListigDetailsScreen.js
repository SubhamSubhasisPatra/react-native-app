import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListigDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/car.jpg")} />
      <View style={styles.detailsContent}>
        <Text style={styles.title}>Aston Matrin</Text>
        <Text style={styles.price}>$123,000</Text>
        <ListItem 
            image={require("../assets/pinku.jpeg")}
            title="Subham Subhasis"
            subTitle="Developer" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContent: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 18,
    marginTop: 10,
    color: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ListigDetailsScreen;
