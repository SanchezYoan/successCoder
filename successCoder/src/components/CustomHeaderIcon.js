import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={24}
      color={Colors.white}
    />
  );
};

export default CustomHeaderIcon;
