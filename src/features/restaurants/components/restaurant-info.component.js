import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { styled } from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 10px;
  color: red;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/b4/9f/d6/photo1jpg.jpg",
    ],
    address = "test street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
});
