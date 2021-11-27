import React from "react";
import NavBar from "../components/Navbar/Navbar";
import CheckoutDetail from "../components/Checkout-Detail/CheckoutDetailBody";
import Footer from "../components/Footer/Footer";

function CheckoutDetailPage(props) {
  console.log("Props from the coach profile page ", props.location.state[0]);
  return (
    <div>
      <NavBar />
      <CheckoutDetail coach={props.location.state[0]} />
      <Footer />
    </div>
  );
}

export default CheckoutDetailPage;
