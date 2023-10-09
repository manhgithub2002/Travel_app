import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AssetImage } from "../../components";
const Successed = () => {
  const hotel = {
    _id: "64c674d23cfa5e847bcd5430",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Seaside Resort",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
    rating: 4.9,
    review: "1204 Reviews",
    location: "Miami Beach, FL",
  };
  return (
    <View>
      <View style={{ marginTop: "40%" }}>
        <AssetImage
          data={require("../../assets/images/checked.png")}
          width={"100%"}
          height={"200"}
          mode={"contain"}
        />
      </View>
    </View>
  );
};

export default Successed;

const styles = StyleSheet.create({});
