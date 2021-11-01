"use strict";

// Reverse string

function reverse(string) {
  if (!string || typeof string !== "string") return "";
  return string.split("").reverse().join("");
}

module.exports = reverse;
