import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}/>  
      <View style={styles.deleteButton}/>  
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
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
    },
    container: {
      backgroundColor:colors.black,
      flex: 1,
    },
    deleteButton: {
        position: "absolute",
        top: "10%",
        left: "10%",
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
    },
    image: {
        width: "100%",
        height: "100%",
    }
});

export default ViewImageScreen;
