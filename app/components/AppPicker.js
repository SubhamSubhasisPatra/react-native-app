import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import Screen from "./Screen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Picker } from "@react-native-picker/picker";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, selectedItem, onSelectItem, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: { ...defaultStyles.text, flex: 1 },
  icon: {
    margin: 10,
  },
});

export default AppPicker;
