import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar as StatusBarNative, 
} from "react-native";

export default function App() {
  let count = 0;
  let clicked = () => {
    count += 1;
    console.log(count);
  };
  let icon = require("./assets/favicon.png");
  console.log(icon);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={clicked}>
        Subham Subhasis
      </Text>
      <TouchableHighlight onPress={clicked}>
        <Image
          source={{
            width: 200 ,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight> */}
      <Button style={styles.Button} onPress={() => Alert.alert("Test Alert" , "The custom message",
      [
        {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
        {text: "OK", onPress: () => console.log("OK Pressed")},
      ])} title="Click Me" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    // fontSize: 30,
    // color: "white",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
  Button: {
    color: "white",
    backgroundColor: "red",
    fontSize: 30,
  }
});
