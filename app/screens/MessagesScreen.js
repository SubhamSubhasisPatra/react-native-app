import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "Subham",
    description: "You around .. ?",
    image: require("../assets/pinku.jpeg"),
  },
  {
    id: 2,
    title: "Subhasis",
    description: "Hey ! buddy",
    image: require("../assets/car.jpg"),
  },
  {
    id: 3,
    title: "Pinku",
    description: "Yup !! 🤣 🤣 🤣 🤣",
    image: require("../assets/homePage.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    marginLeft: "3%",
    marginRight: "3%",
  },
});

export default MessagesScreen;
