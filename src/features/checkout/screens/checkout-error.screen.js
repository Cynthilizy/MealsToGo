import React from "react";

import { Text } from "../../../components/typography/text.component";
import { TabLink } from "../../restaurants/components/restaurant-info.styles";
import { colors } from "../../../infarstructure/theme/colors";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <TabLink>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </TabLink>
  );
};
