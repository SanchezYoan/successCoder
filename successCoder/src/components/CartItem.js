import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CartItem = ({ id, title, price }) => {
  const handleDelete = (id) => {
    alert("L'article à été retiré du panier");
  };

  return (
    <View style={styles.cartItem}>
      <View style={styles.courseInfos}>
        <Text style={styles.courseInfoText}>{title}</Text>
      </View>
      <View style={styles.coursePrice}>
        <Text style={styles.courseInfoText}>{price}</Text>
      </View>
      <TouchableOpacity
        style={styles.cartActions}
        onPress={() => handleDelete(id)}
      >
        <MaterialIcons name="delete" size={24} color={Colors.redBrun} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: Colors.lightOrange,
    borderWidth: 0.5,
    borderColor: Colors.redBrun,
  },
  courseInfos: {
    flexDirection: "row",
    width: "60%",
  },
  coursePrice: {
    width: "20%",
  },
  courseInfoText: {
    paddingHorizontal: 10,
    fontSize: 19,
    color: Colors.green,
  },
  cartActions: {
    // width: "20%",
  },
});
