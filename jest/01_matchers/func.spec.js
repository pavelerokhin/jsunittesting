const { sum, nativeNull } = require("./func");

describe("sum function:", () => {
  test("must return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test("has to be in the certain interval", () => {
    expect(sum(2, 4)).toBeGreaterThan(3);
    expect(sum(1, 4)).toBeGreaterThanOrEqual(3.5);
    expect(sum(1, 3)).toBeLessThan(5);
    expect(sum(1, 3)).toBeLessThanOrEqual(4.5);
  });

  test("must correctly add floating point values", () => {
    expect(sum(0.2, 0.4)).toBeCloseTo(0.6);
  });
});

describe("nativeNull fucntion:", () => {
  test("should return null and falsy value", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();

    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
