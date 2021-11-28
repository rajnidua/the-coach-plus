import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart.js";
import Footer from "../components/Footer/Footer";

function CartList(props) {
  return (
    <div>
      <NavBar />
      <Cart cartItems={props.location.state[0]} />
      <Footer />
    </div>
  );
}

export default CartList;
