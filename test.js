const { readFileSync } = require("fs");
const test = require("flug");
const toTextString = require("./to-text-string");

test("na", ({ eq }) => {
  const str = "test";
  const result = toTextString(str);
  eq(str, result);
});

test("buffer", ({ eq }) => {
  const buf = readFileSync("./test.txt");
  const result = toTextString(buf);
  eq(result, "test");
});
