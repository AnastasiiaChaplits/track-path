import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Create a track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackCreateScreen;
