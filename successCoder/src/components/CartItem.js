import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CartItem = ({ id, title, price }) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
