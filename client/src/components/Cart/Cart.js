import React from "react";

function Cart(props) {
  console.log("props from Cart ", props);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
export default Cart;
/*
<React.Fragment>
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
    </React.Fragment>*/
