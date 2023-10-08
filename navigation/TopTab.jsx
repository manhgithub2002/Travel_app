import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles from "./topTab.style";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <HeightSpacer height={300} />
          {/* <NetworkImage
                    source={}
                    width={'100%'}
                    height={300}
                    radius={0}
                /> */}

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress1={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"Manh Vu"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={2} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"manhhvu@gmail.com"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Info" component={TopInfo} />
        <Tab.Screen name="Trips" component={TopTrips} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
