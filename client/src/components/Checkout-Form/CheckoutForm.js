import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm(props) {
  console.log("checkout form props: ", props);
  const stripe = useStripe();
  const elements = useElements();
  const publishableKey =
    "pk_test_51K02dbHx3vz7LAh8OfUbIJ5miybB4Yu1BR2uhqdEW1TNE8wNdrubwDuIterQYE1YHrK5BBYHj3UPxstOPgU1D3Ms00vcgtL9RJ";
  const stripePromise = loadStripe(publishableKey);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise
        .then((res) => {
          res.redirectToCheckout({ sessionId: data.checkout.session });
        })
        .then((response) => {
          props.setPaymentCompleted(response.success ? true : false);
        });
    }
  }, [data]);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    getCheckout();

    return;
  };

  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Pay with card</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="row"></div>

        <div className="row">
          <h2>PROCEED TO SECURE CHECKOUT</h2>
        </div>

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? (
            <div
              className="spinner-border spinner-border-sm text-light"
              role="status"
            ></div>
          ) : (
            `PAY AUD ${props.amount[9]}`
          )}
        </button>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
      </form>
    </React.Fragment>
  );
}
