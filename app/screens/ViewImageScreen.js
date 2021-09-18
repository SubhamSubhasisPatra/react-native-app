import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </View>
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={require("../assets/car.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: "10%",
    right: "10%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteButton: {
    position: "absolute",
    top: "10%",
    left: "10%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
