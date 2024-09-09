import { reverseString } from "./functionsToTest/reverseString";

describe("Test reverseString function", () => {
  it("Test standard case", () => {
    const string = reverseString("abcd");
    expect(string).toEqual("dcba");
  });
  it("Test edge case", () => {
    const string = reverseString("");
    expect(string).toEqual("");
  });
});
