import React from "react";

import { Text } from "../../../components/typography/text.component";
import { TabLink } from "../../restaurants/components/restaurant-info.styles";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => (
  <TabLink>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </TabLink>
);
