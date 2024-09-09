import { calculator } from "./functionsToTest/calculator";

describe("test calculator functionality", () => {
  describe("test add", () => {
    it("basic addition", () => {
      const add = calculator.add(2, 2);
      expect(add).toEqual(4);
    });
    it("edge case addition", () => {
      const add = calculator.add(2);
      expect(add).toEqual(2);
    });
  });
  describe("test sub", () => {
    it("basic addition", () => {
      const sub = calculator.sub(2, 2);
      expect(sub).toEqual(0);
    });
    it("edge case sub", () => {
      const sub = calculator.sub(2);
      expect(sub).toEqual(2);
    });
  });
});
describe("test mul", () => {
  it("basic mul", () => {
    const mul = calculator.mul(2, 2);
    expect(mul).toEqual(4);
  });
  it("edge case mul", () => {
    const mul = calculator.mul(2);
    expect(mul).toEqual(0);
  });
});
describe("test div", () => {
  it("basic div", () => {
    const div = calculator.div(2, 2);
    expect(div).toEqual(1);
  });
  it("edge case div", () => {
    const div = calculator.div(2);
    expect(div).toEqual(Infinity);
  });
  it("edge case div by zero", () => {
    const div = calculator.div(0, 0);
    expect(div).toEqual(NaN);
  });
});
