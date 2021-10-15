import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";

function ImageInput({ imageuri, onChangeImage }) {
  useEffect(() => {
    resquestPremission();
  }, []);

  const resquestPremission = async () => {
    // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA,Permissions.LOCATION_FOREGROUND);
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable camera permission");
    }
  };

  const handlePress = () => {
    if (!imageuri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error of image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageuri && (
          <MaterialCommunityIcons
            name="camera"
            size={45}
            color={colors.medium}
          />
        )}
        {imageuri && <Image source={{ uri: imageuri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
});

export default ImageInput;
