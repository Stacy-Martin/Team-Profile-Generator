const { it } = require("@jest/globals");
const Manager = require("../lib/manager");

describe("displayIDMethod", () => {
  it("Manager ID is displayed", () => {
      const testID = "890";
      const testEmp = new Manager("Bob", testID, "email@test")
    expect(testEmp.getId()).toBe(testID);
    });
});

describe("displayRole", () => {
    it(" getRole() should return \"Employee\" ", () => {
        const testRole = "Manager";
        const testEmp = new Manager ("Bob", 890, "email@test")
        expect(testEmp.getRole()).toEqual(testRole);
    });
});

describe("displayName", () => {
    it("getName() should return a name", () => {
        const testName = "Bob";
        const testEmp = new Manager(testName, 890, "email@test")
        expect(testEmp.getName()).toEqual(testName);
    });
})

describe("displayEmail", () => {
    it(" getEmail() should return an email ", () => {
        const testEmail = "test@gmail.com";
        const testEmp = new Manager("bob", 890, testEmail)
        expect(testEmp.getEmail()).toEqual(testEmail);
    });
})

describe("displayOfficeNumber", () => {
  it("Office number is displayed", () => {
      const testNumber = "999";
      const testEmp = new Manager("bob", 890, "email@test", testNumber)
      expect(testEmp.getOfficeNumber()).toEqual(testNumber);
});
});

