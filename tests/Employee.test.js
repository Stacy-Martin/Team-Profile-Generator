const { it } = require("@jest/globals");
const internTest = require("../lib/employee");

describe("displayID", () => {
  it("Employee ID is displayed", () => {
      const testID = "890";
    // expect(new id("").visible).toBe(true);
  });
});

describe("displayRole", () => {
    it(" getRole() should return \"Employee\" ", () => {
        const testRole = "Employee";
        // expect(new getRole).toEqual("Employee");
    });
});

describe("displayName", () => {
    it(" getName() should return \"XXXX\" ", () => {
        const testName = "Bob";
        // expect(new getName).toEqual("XXXX");
    });
})

describe("displayEmail", () => {
    it(" getEmail() should return \"XXXX\" ", () => {
        const testEmail = "test@gmail.com";
        // expect(new getEmail).toEqual("XXXX");
    });
})
