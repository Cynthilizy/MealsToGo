import React, { useContext } from "react";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabLink } from "../../features/restaurants/components/restaurant-info.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <TabLink>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </TabLink>
  );
};

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
