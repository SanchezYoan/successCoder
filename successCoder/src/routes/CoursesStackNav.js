import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import Cart from "../screens/Cart";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";

const CoursesStackNavigator = createStackNavigator();

export function CoursesNavigator() {
  return (
    <CoursesStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.green },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: Colors.white,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="panier"
              iconName="shopping-cart"
              onPress={() => navigation.navigate("Cart")}
            />
          </HeaderButtons>
        ),
      })}
    >
      <CoursesStackNavigator.Screen name="Landing" component={Landing} />
      <CoursesStackNavigator.Screen
        name="Details"
        component={CourseInfos}
        // options={({ route }) => ({
        //   title: route.params.title,
        // })}
      />
      <CoursesStackNavigator.Screen name="Cart" component={Cart} />
    </CoursesStackNavigator.Navigator>
  );
}
