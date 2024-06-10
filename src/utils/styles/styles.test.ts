import { createStyles } from "./styles";

describe(createStyles.name, () => {
  it("should accept CSS properties and return the object", () => {
    expect(createStyles({ color: "red" })).toEqual({ color: "red" });
  });
});
