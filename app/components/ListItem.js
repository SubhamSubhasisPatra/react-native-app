import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 5,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
