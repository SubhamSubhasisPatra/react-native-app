import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View, Image } from "react-native";
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
import ListingEditScreen from "./app/screens/ListingEditScreen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the home screen of the app</Text>
      <Button
        onPress={() =>
          navigate("Profile", { names: ["Brent", "Satya", "Michaś"], id: 1 })
        }
        title="Go to Brent's profile"
      />
    </View>
  );
}

function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Text>Friends: </Text>
      <Text>{route.params.names[0]}</Text>
      <Text>{route.params.names[1]}</Text>
      <Text>{route.params.names[2]}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

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
  // return <LoginScreen />;
  //List edit Screen
  // return <ListingEditScreen />;
  // image picker
  // const [imageURIS, setImageURIS] = useState([]);
  // const handleAdd = (uri) => {
  //   setImageURIS([...imageURIS, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setImageURIS(imageURIS.filter((imageUri) => imageUri !== uri));
  // };
  // return (
  //   <Screen>
  //     <ImageInputList
  //       onAddImage={handleAdd}
  //       imageUris={imageURIS}
  //       onRemoveImage={handleRemove}
  //     />
  //   </Screen>
  // );
  // For Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "dodgerblue" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Profile"
          options={({ route }) => ({ title: route.params.id })}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
