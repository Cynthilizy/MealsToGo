import React from "react";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabLink } from "../../features/restaurants/components/restaurant-info.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MapScreen } from "../../features/map/screens/map.screen";

const RestaurantScreen = () => {
  return (
    <TabLink>
      <RestaurantsNavigator />
    </TabLink>
  );
};
const MapsScreen = () => {
  return (
    <TabLink>
      <MapScreen />
    </TabLink>
  );
};
const SettingsScreen = () => {
  return (
    <TabLink>
      <Text>Settings</Text>
    </TabLink>
  );
};

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Restaurants") {
              iconName = focused ? "restaurant-sharp" : "restaurant-sharp";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings";
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={MapsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
