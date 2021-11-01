"use strict";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function capitalize(string) {
  if (typeof string === "string" && !/\d/.test(string[0])) {
    const stringLower = string.toLowerCase();
    return stringLower[0].toUpperCase() + stringLower.slice(1);
  } else {
    throw new Error("error");
  }
}

function reverse(string) {
  if (!string || typeof string !== "string") return "";
  return string.split("").reverse().join("");
}

// export default class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   subtract(a, b) {
//     return a - b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     if (b === 0) throw new Error("div by 0 not allowed");
//     return a / b;
//   }
// }

// const calc = new Calculator();

const caesar = function (string, key) {
  const cipher = [];
  for (let i = 0; i < string.length; i++) {
    if (!alphabet.includes(string[i].toLowerCase())) {
      cipher.push(string[i]);
    } else {
      let index = alphabet.indexOf(string[i].toLowerCase());
      cipher.push(
        string[i] === string[i].toUpperCase()
          ? alphabet[(index + key) % 26].toUpperCase()
          : alphabet[(index + key) % 26]
      );
    }
  }
  return cipher.join("");
};

// export { Calculator };
// module.exports = capitalize;
module.exports = reverse;
// module.exports = calc;
// module.exports = caesar;
