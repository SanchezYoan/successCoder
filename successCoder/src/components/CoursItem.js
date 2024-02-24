import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

const CoursItem = (props) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.green}
      onPress={props.viewDetails}
    >
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: props.image }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.courseContainerDetails}>
          <Text style={styles.courseTitle}>{props.title}</Text>
          <Text style={styles.coursePrice}>{props.price.toFixed(2)} €</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={props.viewDetails}>
            <MaterialIcons
              name="remove-red-eye"
              size={35}
              color={Colors.green}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onAddToCart}>
            <MaterialIcons
              name="shopping-basket"
              size={35}
              color={Colors.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  courseContainerDetails: {
    alignItems: "center",
    height: "20%",
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    marginVertical: 4,
    color: Colors.green,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  coursePrice: {
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "20%",
    paddingHorizontal: 30,
  },
});

export default CoursItem;
