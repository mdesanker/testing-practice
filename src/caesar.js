"use strict";

const alphabet = require("./alphabet");

// Caesar Cipher

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

module.exports = caesar;
