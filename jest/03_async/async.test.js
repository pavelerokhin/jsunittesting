const Ajax = require("./async");
const axios = require("axios");

jest.mock("axios");

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

describe("Ajax: get", () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ];

    response = {
      data: { todos },
    };
  });

  test("should return data from backend", () => {
    axios.get.mockReturnValue(response);
    Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
