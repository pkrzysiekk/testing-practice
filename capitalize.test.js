import { capitalize } from "./functionsToTest/capitalize";

test("test capitalize", () => {
  const string = capitalize("abcd");
  expect(string).toEqual("Abcd");
});
