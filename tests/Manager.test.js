const { it } = require("@jest/globals");
const managerTest = require("../lib/manager");

describe("displayOfficeNumber", () => {
  it("Office number is displayed", () => {
      const testNumber = "999";
    // expect(new officeNumber("").visible).toBe(true);
  });
});

describe("displayRole", () => {
    it(" getRole() should return \"Manager\" ", () => {
        const testRole = "Manager";
        // expect(new getRole).toEqual("Manager");
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

