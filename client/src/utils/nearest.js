import React from "react";
//Find the closest value in array using sort()
function Closest(props) {
  const needle = props.val;
  const numbers = props.myList;

  numbers.sort((a, b) => {
    return Math.abs(needle - a) - Math.abs(needle - b);
  });

  console.log(numbers[0]);
  console.log(numbers[1]);
  console.log(numbers[2]);
  console.log(numbers[3]);
  return numbers[0];
}

//Find the closest value in array using reduce()
/* function closest(needle, haystack) {
  return haystack.reduce((a, b) => {
    let aDiff = Math.abs(a - needle);
    let bDiff = Math.abs(b - needle);

    if (aDiff == bDiff) {
      return a > b ? a : b;
    } else {
      return bDiff < aDiff ? b : a;
    }
  });
} */

export default Closest;
