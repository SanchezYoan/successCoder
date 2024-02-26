import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Cart = () => {
  const coursesCart = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);

  const renderCart = (id, title, price) => {
    return <CartItem id={id} title={title} price={price} />;
  };

  return (
    <View>
      <View style={styles.scroll}>
        <FlatList
          data={coursesCart}
          renderItem={({ item }) => renderCart(item.id, item.title, item.price)}
        />
      </View>
      <View style={styles.footerBottom}>
        <Text style={styles.total}>Total - {total.toFixed(2)} €</Text>
        <TouchableOpacity style={styles.validCart}>
          <MaterialCommunityIcons
            name="cart-check"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: Colors.white,
    height: "90%",
  },
  footerBottom: {
    backgroundColor: Colors.green,
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  validCart: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.yellow,
    backgroundColor: Colors.orange,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
});

export default Cart;
