import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import addToCart from "../redux/actions/actionAddToCart";

const CourseInfos = ({ navigation, route }) => {
  const { courseId, courseTitle } = route.params;

  const selectedCourse = useSelector((state) =>
    state.courses.existingCourses.find((course) => course.id === courseId)
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(selectedCourse));
    navigation.goBack();
    alert("Article ajouté au panier");
  };
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
          <View style={styles.btnGoBack}>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color={Colors.white}
              onPress={() => navigation.goBack()}
            />
          </View>
          <TouchableOpacity onPress={handleAddToCart}>
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
    color: Colors.orange,
  },
  footerBottom: {
    backgroundColor: Colors.green,
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  btnGoBack: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.yellow,
    backgroundColor: Colors.redBrun,
    paddingVertical: 6,
    paddingLeft: 20,
    paddingRight: 15,
  },
  btnAddCart: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.yellow,
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: Colors.orange,
  },
});

export default CourseInfos;
