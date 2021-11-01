const caesar = require("./index");
const reverse = require("./index");
const capitalize = require("./index");
// import Calculator from "./index";
// jest.mock("./index");

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

// test("throw error when function called with number", () => {
//   expect(() => {
//     reverse(31);
//   }).toThrowError("error");
// });

/////////////////////////////////////////////

// test("addition function", () => {
//   // const mockCalc = new Calculator();
//   const mockCalcFunc = Calculator.mock.add;
//   expect(mockCalcFunc(1, 2)).toBe(3);
// });

// Test: add, sub, mul, div, string arg, div by 0

/////////////////////////////////////////////

test("caesar cipher on a string with key of 3", () => {
  expect(caesar("abc", 3)).toBe("def");
});

test("test wrapping from z to a", () => {
  expect(caesar("xyzabc", 3)).toBe("abcdef");
});

test("test maintaining capitalization", () => {
  expect(caesar("Hello", 5)).toBe("Mjqqt");
});

test("test maintaining punctuation", () => {
  expect(caesar("hello, world", 5)).toBe("mjqqt, btwqi");
});

test("test passing string with numbers", () => {
  expect(caesar("hello9", 5)).toBe("mjqqt9");
});
