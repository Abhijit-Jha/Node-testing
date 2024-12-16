const { describe, it, expect } = require("@jest/globals");
const { sum } = require("./index");
describe("Testing sum function", () => {
  it("1 + 2 is 3", () => {
    expect(sum(2, 1)).toBe(3);
  });
});
