import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: "3%",
    marginRight: "3%",
    backgroundColor: colors.medium,
  },
});

export default ListItemSeparator;
