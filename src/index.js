"use strict";

function capitalize(string) {
  if (typeof string === "string" && !/\d/.test(string[0])) {
    const stringLower = string.toLowerCase();
    return stringLower[0].toUpperCase() + stringLower.slice(1);
  } else {
    throw new Error("error");
  }
}

function reverseString(string) {
  if (!string) return "";
  if (typeof string === "number") throw new Error("error");
  const arr = string.split("");
  arr.reverse();
  return arr.join("");
}

module.exports = capitalize;
module.exports = reverseString;
