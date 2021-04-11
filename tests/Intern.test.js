const { it } = require("@jest/globals");
const internTest = require("../lib/intern");

describe("displaySchool", () => {
  it("School is displayed", () => {
      const testSchool = "WashU";
    // expect(new school("").visible).toBe(true);
  });
});

describe("displayRole", () => {
    it(" getRole() should return \"Intern\" ", () => {
        const testRole = "Intern";
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
