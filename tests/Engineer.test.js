const { it } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe("displayIDMethod", () => {
  it("Engineer ID is displayed", () => {
      const testID = "890";
      const testEmp = new Engineer ("Bob", testID, "email@test")
    expect(testEmp.getId()).toBe(testID);
    });
});

describe("displayRole", () => {
    it(" getRole() should return \"Employee\" ", () => {
        const testRole = "Engineer";
        const testEmp = new Engineer("Bob", 890, "email@test")
        expect(testEmp.getRole()).toEqual(testRole);
    });
});

describe("displayName", () => {
    it("getName() should return a name", () => {
        const testName = "Bob";
        const testEmp = new Engineer(testName, 890, "email@test")
        expect(testEmp.getName()).toEqual(testName);
    });
})

describe("displayEmail", () => {
    it(" getEmail() should return an email ", () => {
        const testEmail = "test@gmail.com";
        const testEmp = new Engineer("bob", 890, testEmail)
        expect(testEmp.getEmail()).toEqual(testEmail);
    });
})

describe("displayGithub", () => {
    it("getGithub returns engineers github username", () => {
        const testGithub = "abc-xyz";
        const testEmp = new Engineer("bob", 890, "email@test", testGithub)
        expect(testEmp.getGithub()).toEqual(testGithub);
  });
  });

