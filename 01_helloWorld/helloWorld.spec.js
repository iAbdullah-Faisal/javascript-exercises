const helloWorld = require("./helloWorld");

describe("Hello World", function () {
  test('says ""', function () {
    expect(helloWorld()).toEqual("Hi Abdullah");
  });
});
