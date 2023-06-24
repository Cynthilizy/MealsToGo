import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { Platform } from "react-native";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();
const isAndroid = Platform.OS === "android";

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={() => {
        const headerShown = false;
        const transitionPreset = isAndroid
          ? TransitionPresets.ModalTransition
          : TransitionPresets.ModalPresentationIOS;

        return {
          headerShown,
          ...transitionPreset,
        };
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
