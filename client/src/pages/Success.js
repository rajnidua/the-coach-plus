import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import "../styles/success.css";
import { Link } from "react-router-dom";
//import Jumbotron from "../components/Jumbotron";
////import { ADD_ORDER } from "../utils/mutations";
//mport { idbPromise } from "../utils/helpers";

function Success() {
  //const [addOrder] = useMutation(ADD_ORDER);

  /* useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]); */

  const successMessage = () => {
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
  };

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for Registering through theCoachPlus!</h2>
      <h2>
        <Link
          to={{
            pathname: "/",
            state: false,
          }}
          className="btn"
        >
          ⬅GO TO HOMEPAGE
        </Link>
      </h2>
      {successMessage()}
    </div>
  );
}

export default Success;
