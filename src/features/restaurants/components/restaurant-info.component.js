import React from "react";
import { SvgXml } from "react-native-svg";
import starIcon from "../../../../assets/starIcon";
import isOpen from "../../../../assets/isOpen";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Section,
  SectionEnd,
  Rating,
  CardCover,
  Info,
  RestaurantCard,
  Address,
  Icon,
} from "./restaurant-info.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test restaurant",
    icon = "https://www.vhv.rs/dpng/d/429-4294391_restaurant-menu-icon-png-icons-for-food-app.png",
    photos = [
      "https://ravintolamandala.fi/wp-content/uploads/2014/05/indian-feast-2-copy-2048x1588.jpg",
    ],
    address = "83 test street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={starIcon}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer position="top" size="medium">
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
            </Spacer>
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={isOpen} width={30} height={30} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
