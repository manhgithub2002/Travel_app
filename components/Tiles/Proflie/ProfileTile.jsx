import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../../Reusable/reuasble.style";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, SIZES } from "../../../constants/theme";
import WidthSpacer from "../../Reusable/WidthSpacer";

const ProfileTile = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={24} />

          <WidthSpacer width={10} />
          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.black}
          />
        </View>

        <View>
          <AntDesign name="right" size={24} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    marginBottom: 10,
  },
});
