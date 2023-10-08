import { StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  const coordinates = {
    latitude: 35.6855,
    longtitude: 139.6884,
    latitudeDelta: 0.01,
    longtitudeDelta: 0.01,
    title: "My Location",
  };
  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title={coordinates.title} />
    </MapView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});
