import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function UserIcon({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.6} />
    </View>
  );
}

export default UserIcon;
