import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    // marginLeft: "3%",
    // marginRight: "3%",
    flex: 1,
  },
});

export default Screen;
