const Ajax = require("./async");

describe("Ajax: echo", () => {
  test("should return value async", async () => {
    const res = await Ajax.echo("some data");
    expect(res).toBe("some data");
  });

  test("should catch Error async", async () => {
    try {
      await Ajax.echo();
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test("should return value with Promise", () => {
    Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  test("should catch Error in Promise", () => {
    Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});
