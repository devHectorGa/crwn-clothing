import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  CheckoutBlock,
  CheckoutTotalContainer,
  TestWarningContainer,
} from "./checkout.styles";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-buttom/stripe-buttom.component";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <CheckoutBlock>
        <span>Product</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Description</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Quantity</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Price</span>
      </CheckoutBlock>
      <CheckoutBlock>
        <span>Remove</span>
      </CheckoutBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckoutTotalContainer>
      <span>TOTAL: ${total}</span>
    </CheckoutTotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
