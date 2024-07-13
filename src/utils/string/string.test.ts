import { ensureString } from "./string";

describe(ensureString.name, () => {
  it("should throw error if string is undefined", () => {
    expect(() => ensureString("Key", undefined)).toThrow(
      "Key does not exist or is empty"
    );
  });

  it("should return the string if it is defined", () => {
    const string = "string";

    expect(ensureString("Key", string)).toEqual(string);
  });
});
