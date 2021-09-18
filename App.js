import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListigDetailsScreen from "./app/screens/ListigDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // welcome screen 
  // return <WelcomeScreen />;

  // for login buttonn 
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <AppButton title="Log In"></AppButton>
  //   </View>
  // );

  // for card 
  // return (
  //   <View style={{
  //     backgroundColor: "#f8f4f4",
  //     padding: 20,
  //     paddingTop: 100,
  //   }}>
  //     <Card 
  //       title="Aston Martin"
  //       subtitle="100$"
  //       image={require("./app/assets/car.jpg")}
  //     />
  //   </View>
  // );

  // list of cards
  // return <ListigDetailsScreen/>

  // view image screen 
  // return <ViewImageScreen/>;

  // messages screen
  return <MessagesScreen/>
}
