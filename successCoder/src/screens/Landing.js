import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CoursItem from "../components/CoursItem";
import EmptyMsg from "../components/EmptyMsg";

const Landing = ({ navigation }) => {
  const existingCourses = useSelector((state) => state.courses.existingCourses);

  if (existingCourses.length) {
    return (
      <FlatList
        data={existingCourses}
        renderItem={({ item }) => (
          <CoursItem
            image={item.image}
            price={item.price}
            title={item.title}
            viewDetails={() =>
              navigation.navigate("Details", {
                courseId: item.id,
                courseTitle: item.title,
              })
            }
            onAddToCart={() => navigation.navigate("Cart")}
          />
        )}
      />
    );
  } else {
    return <EmptyMsg text="Pas de cours disponible pour le moment.." />;
  }
};

const styles = StyleSheet.create({});

export default Landing;
