import { analyzeArray } from "./functionsToTest/analyzeArray";

describe("Test analyzeArray function", () => {
  it("test base case", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(obj).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  it("test empty arr", () => {
    const obj = analyzeArray([]);
    expect(obj).toEqual({
      average: 0,
      min: -1,
      max: -1,
      length: 0,
    });
  });
  it("test non arr", () => {
    const obj = analyzeArray();
    expect(obj).toEqual(null);
  });
});
