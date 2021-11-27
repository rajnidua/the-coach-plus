import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Checkout-Form/CheckoutForm";
import Cart from "../Cart/Cart.js";

/* const successMessage = () => {
  return (
    <div className="success-msg">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-check2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  );
}; */

const publishableKey =
  "pk_test_51K02dbHx3vz7LAh8OfUbIJ5miybB4Yu1BR2uhqdEW1TNE8wNdrubwDuIterQYE1YHrK5BBYHj3UPxstOPgU1D3Ms00vcgtL9RJ";
// We call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//We pass on Publishable Key here
//This could be passed here directly
//secret key need to be hidden in server env

const stripePromise = loadStripe(publishableKey);

function CheckoutDetailBody(props) {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  console.log("CKECKOUT %%%%%%%%", props);
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h4>
          Stripe Integration -{" "}
          <a
            href="https://www.theCoachPlus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            theCoachPlus
          </a>
        </h4>
      </div>

      <div className="row s-box">
        {paymentCompleted ? (
          <p>successMessage</p>
        ) : (
          <React.Fragment>
            <div className="col-md-5 order-md-2 mb-4">
              <Cart type={props} />
            </div>
            <div className="col-md-7 order-md-1">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  amount={2000}
                  setPaymentCompleted={setPaymentCompleted}
                />
              </Elements>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default CheckoutDetailBody;

//<CheckoutForm type={props} />;
