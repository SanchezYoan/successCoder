import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import addPayment from "../redux/actions/actionAddPayment";

const Cart = () => {
  const coursesCart = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const renderCart = (id, title, price) => {
    return <CartItem id={id} title={title} price={price} />;
  };

  const handlePayment = (coursesCart, total) => {
    dispatch(addPayment(coursesCart, total));
    alert("Paiement effectué");
  };

  return (
    <View>
      {coursesCart.length !== 0 ? (
        <>
          <View style={styles.scroll}>
            <FlatList
              data={coursesCart}
              renderItem={({ item }) =>
                renderCart(item.id, item.title, item.price)
              }
            />
          </View>
          <View style={styles.footerBottom}>
            <Text style={styles.total}>Total - {total.toFixed(2)} €</Text>
            <TouchableOpacity
              style={styles.validCart}
              onPress={() => handlePayment(coursesCart, total)}
            >
              <MaterialCommunityIcons
                name="cart-check"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.nothingCourses}>Panier Vide</Text>
      )}
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
  nothingCourses: {
    fontSize: 18,
    textAlign: "center",
    color: Colors.green,
    margin: 20,
  },
});

export default Cart;
