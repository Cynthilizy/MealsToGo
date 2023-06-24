import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { styled } from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { Search } from "../components/search.component";

const isAndroid = Platform.OS === "android";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const RestaurantDetails = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingCover = styled(View)`
  position: absolute;
  margin-top: 50%;
  margin-left: 30%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <Container>
      {isLoading && (
        <LoadingCover>
          <ActivityIndicator size={50} animating={true} color="#0000FF" />
        </LoadingCover>
      )}
      <Search />
      <RestaurantDetails>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfo restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantDetails>
    </Container>
  );
};
