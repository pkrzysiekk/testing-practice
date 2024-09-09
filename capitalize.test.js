import { capitalize } from "./functionsToTest/capitalize";
describe("Test capitalize function", () => {
  it("test capitalize", () => {
    const string = capitalize("abcd");
    expect(string).toEqual("Abcd");
  });
});
