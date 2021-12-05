import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useParams } from "react-router-dom";

function NavCart() {
  const { username: userParam } = useParams();

  console.log("userParam", userParam);

  const { loading: userLoading, data: userData } = useQuery(
    userParam ? QUERY_USER : QUERY_ME,
    {
      variables: { username: userParam },
    }
  );

  const user = userData?.me || userData?.user || {};
  console.log("###################" + user.username);

  console.log("************", user.programsEnrolled);
  const { programsEnrolled } = user;
  const program = [{ ...programsEnrolled }];
  console.log(program[0][1]);
  console.log(program[0][0]);
  const newValue = program[0][1];
  console.log(newValue);

  console.log(Object.keys(program));
  console.log(Object.entries(program));
  console.log(Object.values(program));
  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));

  Object.entries(user).map(([key, programsEnrolled]) => {
    console.log("key name = ", key);

    user.programsEnrolled.map((el) => {
      console.log(el.fees);
    });
  });

  const [newProps, setNewProps] = useState([]);

  const total = Object.entries(user).map(
    ([key, programsEnrolled]) =>
      key == "programsEnrolled" &&
      user.programsEnrolled.reduce((sum, item) => sum + item.fees, 0)
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

  /* useEffect(() => {
    console.log("checking the use effect");
    setNewProps({ ...user, total });
  }, [total]); */

  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary badge-pill">
          {Object.entries(user).map(
            ([key, programsEnrolled]) =>
              key == "programsEnrolled" && user.programsEnrolled.length
          )}
        </span>
      </h4>

      <div>
        {Object.entries(user).map(
          ([key, programsEnrolled]) =>
            key == "programsEnrolled" &&
            user.programsEnrolled.map((el) => (
              <ul>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">{el.coachname}</h6>
                    <small className="text-muted">{el.sportName}</small>
                  </div>
                  <span className="text-muted">{el.fees}</span>
                </li>
              </ul>
            ))
        )}
      </div>

      <li className="list-group-item d-flex justify-content-between">
        <span>Total (AUD)</span>
        <strong>{total}</strong>
      </li>

      <Link
        className="btn"
        to={{
          pathname: "/CheckoutDetail",

          state: [total],
        }}
      >
        Proceed To Checkout
      </Link>
    </React.Fragment>
  );
}
export default NavCart;
