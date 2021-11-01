const capitalize = require("./index");

test("capitalize first character of lowercase string", () => {
  expect(capitalize("word")).toBe("Word");
});

test("capitalize first character of string with random caps", () => {
  expect(capitalize("wOrD")).toBe("Word");
});

test("capitalize first character of string with multiple words", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("capitalize first character of string with digit not at beginning", () => {
  expect(capitalize("n9ne")).toBe("N9ne");
});

test("throw error if function called without argument", () => {
  expect(capitalize).toThrowError("error");
});

test("throw error if string begins with a number", () => {
  expect(() => {
    capitalize("9new");
  }).toThrowError("error");
});

test("throw error if input is a number", () => {
  expect(() => {
    capitalize(9);
  }).toThrowError("error");
});
