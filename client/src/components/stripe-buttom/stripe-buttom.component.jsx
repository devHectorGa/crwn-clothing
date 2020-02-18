import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_j47TcWe1wf4Wrjqdi6GJMpeN008wR0cGMl";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="developer Hector Garzon."
      billingAddress
      shippingAddress
      image="https://images.ctfassets.net/yiwti6l5cw83/6nf3rNaaVaUqYcoAcciSeC/f2b2d0a65091b4466a8de92a9b2debac/imagotipo.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
