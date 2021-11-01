"use strict";

export default class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("div by 0 not allowed");
    return a / b;
  }
}

module.exports = Calculator;
