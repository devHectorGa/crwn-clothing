import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_j47TcWe1wf4Wrjqdi6GJMpeN008wR0cGMl";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => alert("Payment successful"))
      .catch(error => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure you use the provided credit cart."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="developer Hector Garzón."
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
