"use strict";

// Capitalize first character in string

function capitalize(string) {
  if (typeof string === "string" && !/\d/.test(string[0])) {
    const stringLower = string.toLowerCase();
    return stringLower[0].toUpperCase() + stringLower.slice(1);
  } else {
    throw new Error("error");
  }
}

module.exports = capitalize;
