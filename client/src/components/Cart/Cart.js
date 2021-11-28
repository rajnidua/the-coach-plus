import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const [newProps, setNewProps] = useState([{ ...props }]);
  console.log(
    "props from Cart ",
    props.cartItems.coach.user.programsEnrolled[0]
  );
  //const { cartItems, onAdd } = props;
  //const { userCart } = props.cartItems.coach.user;
  //console.log("programs enrolled in cart ", userCart);
  const itemsPrice = 20;

  const total = props.cartItems.coach.user.programsEnrolled.reduce(
    (sum, item) => sum + item.fees,
    0
  );

  const totalPrice = 40;
  const onRemove = (item) => {
    console.log("Item is removed");
    return;
  };
  const onAdd = (item) => {
    console.log("Item is added");
    return;
  };

  useEffect(() => {
    console.log("checking the use effect");
    setNewProps({ ...props, total });
  }, [total]);

  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary badge-pill">
          {props.cartItems.coach.user.programsEnrolled.length}
        </span>
      </h4>
      <ul className="list-group mb-3">
        {props.cartItems.coach.user.programsEnrolled.map((item) => (
          <div key={item._id}>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{item.coachname}</h6>
                <small className="text-muted">{item.sportName}</small>
              </div>
              <span className="text-muted">{item.fees}</span>
            </li>
          </div>
        ))}
      </ul>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (AUD)</span>
        <strong>{total}</strong>
      </li>

      <Link
        to={{
          pathname: "/CheckoutDetail",

          state: [newProps],
        }}
      >
        Proceed To Checkout
      </Link>
    </React.Fragment>
  );
}
export default Cart;

/*<aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
         {cartItems.length === 0 && <div>Cart is empty</div>} 
        {props.cartItems.coach.user.programsEnrolled.map((item) => (
          <div key={item._id} className="row">
            <div className="col-2">{item.coachname}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2 text-right">{item.fees}</div>
          </div>
        ))}

        {props.cartItems.coach.user.programsEnrolled.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{itemsPrice}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside> */

/*<React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">AUD1200</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Second product</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">AUD800</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Third item</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">AUD500</span>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-AUD10</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (AUD)</span>
          <strong>AUD2000</strong>
        </li>
      </ul>
    </React.Fragment> */
