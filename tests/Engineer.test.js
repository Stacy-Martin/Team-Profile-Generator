const { it } = require("@jest/globals");
const engineerTest = require("../lib/engineer");

describe("displayGithub", () => {
  it("GitHub profile is displayed", () => {
      const testGithub = "Stacy-Martin";
    // expect(new githun("").visible).toBe(true);
  });
});

describe("displayRole", () => {
    it(" getRole() should return \"Engineer\" ", () => {
        const testRole = "Engineer";
        // expect(new getRole).toEqual("Engineer");
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
