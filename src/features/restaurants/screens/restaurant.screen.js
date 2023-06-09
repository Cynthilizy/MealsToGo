import React from "react";
import { Searchbar } from "react-native-paper";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.f1}>
        <Searchbar />
      </View>
      <View style={styles.f2}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  f1: {
    padding: 16,
  },
  f2: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
