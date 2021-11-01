const capitalize = require("./index");

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

test("reverse characters in string of letters", () => {
  expect(capitalize("word")).toBe("drow");
});

test("reverse characters in string of numbers", () => {
  expect(capitalize("48642")).toBe("24684");
});

test("reverse characters in string of letters and numbers", () => {
  expect(capitalize("n9ne")).toBe("en9n");
});

test("return empty string when function called without argument", () => {
  expect(capitalize()).toBe("");
});

test("throw error when function called with number", () => {
  expect(() => {
    capitalize(31);
  }).toThrowError("error");
});

/////////////////////////////////////////////
