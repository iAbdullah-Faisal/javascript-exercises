const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Abdullah", () => {
    expect(values.firstName).toEqual("Abdullah");
  });
  test("lastName is Faisal", () => {
    expect(values.lastName).toEqual("Faisal");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 2002", () => {
    expect(values.birthYear).toEqual(2002);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Abdullah Faisal and I am 23 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Abdullah Faisal", () => {
    expect(values.fullName).toEqual("Abdullah Faisal");
  });
  test("age is 18", () => {
    expect(values.age).toEqual(23);
  });
});
