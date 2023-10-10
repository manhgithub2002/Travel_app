import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reuasble.style";
import {
  AppBar,
  AssetImage,
  Counter,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableBtn,
  ReusableText,
  WidthSpacer,
} from "../../components";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={item.title}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
          top={50}
          left={20}
          right={20}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <ReusableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <ReusableText
              text={"Room Requirements"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={30} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReusableText
                text={"$ 400"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <AssetImage
                  data={require("../../assets/images/Visa.png")}
                  mode={"contain"}
                  width={30}
                  height={20}
                />

                <ReusableText
                  text={"Visa"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"4 Guest"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>
            <HeightSpacer height={30} />

            <ReusableBtn
              onPress={() => navigation.navigate("Successed", { item })}
              btnText={"Select Room"}
              width={SIZES.width - 50}
              backgroundColor={COLORS.green}
              boderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />

            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
