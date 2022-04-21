import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const [newProps, setNewProps] = useState([{ ...props }]);
  console.log(props);

  const total = props.cartItems.coach.user.programsEnrolled.reduce(
    (sum, item) => sum + item.fees,
    0
  );

  // const onRemove = (item) => {
  //   return;
  // };
  // const onAdd = (item) => {
  //   return;
  // };

  useEffect(() => {
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
