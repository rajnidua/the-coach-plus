import React, { useState } from "react";
//import CheckoutForm from "../Checkout-Form/CheckoutForm";
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
            <div className="col-md-7 order-md-1">CheckoutForm</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default CheckoutDetailBody;
