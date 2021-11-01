"use strict";

// Array analyzer

function average(arr) {
  return arr.reduce((acc, val) => acc + val) / arr.length;
}

function min(arr) {
  return arr.reduce((acc, val) => (acc < val ? acc : val), arr[0]);
}

function max(arr) {
  return arr.reduce((acc, val) => (acc > val ? acc : val), arr[0]);
}

function analyze(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

module.exports = analyze;
