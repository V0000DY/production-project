import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional classes", () => {
    const expected = "someClass additionalClass1 additionalClass2";
    expect(
      classNames("someClass", {}, ["additionalClass1", "additionalClass2"])
    ).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
