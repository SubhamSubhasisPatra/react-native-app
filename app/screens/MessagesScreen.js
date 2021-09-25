import React, { useState } from "react";
import { FlatList } from "react-native";

import ListIteamDeleteAction from "../components/ListIteamDeleteAction";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refresing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete from the messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("selected", item)}
            renderRightActions={() => (
              <ListIteamDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refresing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
