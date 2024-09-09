import { cesarCipher } from "./functionsToTest/cesarCipher";

describe("Testing Cesar Cipher", () => {
  it("standard case", () => {
    const string = cesarCipher("abcd", 3);
    expect(string).toEqual("defg");
  });
  it("standard upper case", () => {
    const string = cesarCipher("ABCD", 3);
    expect(string).toEqual("DEFG");
  });
  it("standard mixed case", () => {
    const string = cesarCipher("ABcd", 3);
    expect(string).toEqual("DEfg");
  });
  it("test with spaces", () => {
    const string = cesarCipher("ab cd", 3);
    expect(string).toEqual("de fg");
  });
  it("test with sentences", () => {
    const string = cesarCipher("am doing just fine!", 3);
    expect(string).toEqual("dp grlqj mxvw ilqh!");
  });
});
