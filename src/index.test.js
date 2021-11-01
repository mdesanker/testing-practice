const caesar = require("./caesar");
const reverse = require("./reverse");
const capitalize = require("./capitalize");
const analyze = require("./analyze");
const Calculator = require("./calculator");

// import Calculator from "./index";
// jest.mock("./index");

/////////////////////////////////////////

// Testing capitalize function

// test("capitalize first character of lowercase string", () => {
//   expect(capitalize("word")).toBe("Word");
// });

// test("capitalize first character of string with random caps", () => {
//   expect(capitalize("wOrD")).toBe("Word");
// });

// test("capitalize first character of string with multiple words", () => {
//   expect(capitalize("this is a test")).toBe("This is a test");
// });

// test("capitalize first character of string with digit not at beginning", () => {
//   expect(capitalize("n9ne")).toBe("N9ne");
// });

// test("throw error if function called without argument", () => {
//   expect(capitalize).toThrowError("error");
// });

// test("throw error if string begins with a number", () => {
//   expect(() => {
//     capitalize("9new");
//   }).toThrowError("error");
// });

// test("throw error if input is a number", () => {
//   expect(() => {
//     capitalize(9);
//   }).toThrowError("error");
// });

//////////////////////////////////////

// Testing reverse function

// test("reverse characters in string of letters", () => {
//   expect(reverse("word")).toBe("drow");
// });

// test("reverse characters in string of numbers", () => {
//   expect(reverse("48642")).toBe("24684");
// });

// test("reverse characters in string of letters and numbers", () => {
//   expect(reverse("n9ne")).toBe("en9n");
// });

// test("return empty string when function called without argument", () => {
//   expect(reverse()).toBe("");
// });

// test("return empty string when function called with number", () => {
//   expect(reverse(31)).toBe("");
// });

/////////////////////////////////////////////

// Testing calculator object

const mockCalc = new Calculator();

test("addition function", () => {
  expect(mockCalc.add(1, 2)).toEqual(3);
});

// Test: add, sub, mul, div, string arg, div by 0

/////////////////////////////////////////////

// Testing caesar cipher

// test("caesar cipher on a string with key of 3", () => {
//   expect(caesar("abc", 3)).toBe("def");
// });

// test("test wrapping from z to a", () => {
//   expect(caesar("xyzabc", 3)).toBe("abcdef");
// });

// test("test maintaining capitalization", () => {
//   expect(caesar("Hello", 5)).toBe("Mjqqt");
// });

// test("test maintaining punctuation", () => {
//   expect(caesar("hello, world", 5)).toBe("mjqqt, btwqi");
// });

// test("test passing string with numbers", () => {
//   expect(caesar("hello9", 5)).toBe("mjqqt9");
// });

/////////////////////////////////////

// Testing array analysis

// test("analyze array of unique numbers", () => {
//   expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6,
//   });
// });

// test("analyze array of identical numbers", () => {
//   expect(analyze([2, 2, 2, 2, 2])).toEqual({
//     average: 2,
//     min: 2,
//     max: 2,
//     length: 5,
//   });
// });
