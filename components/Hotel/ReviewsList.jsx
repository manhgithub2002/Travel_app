import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewTle from "../../components/index";

const ReviewsList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ReviewTle review={item} />}
    />
  );
};

export default ReviewsList;

const styles = StyleSheet.create({});
