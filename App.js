import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListigDetailsScreen from "./app/screens/ListigDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import UserIcon from "./app/components/UserIcon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

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
  // return <MessagesScreen/>
  // icon components
  // return (
  // <Screen>
  //   {/* <UserIcon name="trash-can" size={40} />
  //   <UserIcon name="email" size={40} /> */}
  //   <ListItem
  //     title="subham"
  //     ImageComponent={<UserIcon name="email" size={40} />}
  //   />
  // </Screen>
  // );

  // Accoutn Screen
  // return <AccountScreen />;

  // Input componet
  // const categories = [
  //   { label: "Shirts", value: 1 },
  //   { label: "Hats", value: 2 },
  //   { label: "Jeans", value: 3 },
  // ];

  // const [category, setCategory] = useState();
  // return (
  //   <Screen>
  //     <AppPicker
  //       selectedItem={category}
  //       onSelectItem={(item) => setCategory(item)}
  //       icon="apps"
  //       placeholder="Select one"
  //       items={categories[0]}
  //     />
  //     <AppTextInput placeholder="Enter Name" icon="email" />
  //   </Screen>
  // );

  // Form Component
  return <LoginScreen />;
}
