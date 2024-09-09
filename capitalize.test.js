import { capitalize } from "./functionsToTest/capitalize";
describe("Test capitalize function", () => {
  it("test basic functionality", () => {
    const string = capitalize("abcd");
    expect(string).toEqual("Abcd");
  });
  it("test edge case", () => {
    const string = capitalize("");
    expect(string).toEqual("");
  });
});
