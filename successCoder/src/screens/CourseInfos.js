import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";

const CourseInfos = ({ navigation, route }) => {
  const { courseId, courseTitle } = route.params;

  const selectedCourse = useSelector((state) =>
    state.courses.existingCourses.find((course) => course.id === courseId)
  );

  useEffect(() => {
    navigation.setOptions({
      title: selectedCourse.title,
    });
  }, [navigation]);

  return (
    <View>
      <ScrollView>
        <Image
          source={{ uri: selectedCourse.image }}
          style={styles.coursImage}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseDesc}>{selectedCourse.description}</Text>
          <Text style={styles.courseDesc}>{selectedCourse.description}</Text>
          <Text style={styles.courseDesc}>{selectedCourse.description}</Text>
          <Text style={styles.courseDesc}>{selectedCourse.description}</Text>
          <Text style={styles.courseDesc}>{selectedCourse.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePrice}>
              {selectedCourse.price.toFixed(2)} €
            </Text>
          </View>
        </View>
        <View style={styles.footerBottom}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={Colors.white}
            onPress={() => navigation.goBack()}
          />
          <TouchableOpacity onPress={() => alert("Ajouté au panier")}>
            <View style={styles.btnAddCart}>
              <MaterialIcons
                name="add-shopping-cart"
                size={24}
                color={Colors.white}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: Colors.white,
    height: "80%",
  },
  coursImage: {
    width: "100%",
    height: 250,
  },
  courseDetails: {
    padding: 20,
    alignItems: "center",
  },
  courseDesc: {
    color: Colors.dimGray,
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 17,
  },
  footerContainer: {
    height: "45%",
  },
  footerTop: {
    height: "12%",
    justifyContent: "center",
    backgroundColor: Colors.lightGrey,
  },
  coursePriceWrapper: {
    paddingRight: 40,
  },
  coursePrice: {
    fontSize: 24,
    textAlign: "right",
    color: Colors.green,
  },
  footerBottom: {
    backgroundColor: Colors.green,
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  btnAddCart: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 20,
    color: Colors.lightOrange,
  },
});

export default CourseInfos;
