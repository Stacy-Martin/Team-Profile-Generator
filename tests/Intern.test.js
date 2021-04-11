const { it } = require("@jest/globals");
const Intern = require("../lib/intern");

describe("displayIDMethod", () => {
  it("Engineer ID is displayed", () => {
      const testID = "890";
      const testEmp = new Intern ("Bob", testID, "email@test")
    expect(testEmp.getId()).toBe(testID);
    });
});

describe("displayRole", () => {
    it(" getRole() should return \"Employee\" ", () => {
        const testRole = "Intern";
        const testEmp = new Intern("Bob", 890, "email@test")
        expect(testEmp.getRole()).toEqual(testRole);
    });
});

describe("displayName", () => {
    it("getName() should return a name", () => {
        const testName = "Bob";
        const testEmp = new Intern(testName, 890, "email@test")
        expect(testEmp.getName()).toEqual(testName);
    });
})

describe("displayEmail", () => {
    it(" getEmail() should return an email ", () => {
        const testEmail = "test@gmail.com";
        const testEmp = new Intern("bob", 890, testEmail)
        expect(testEmp.getEmail()).toEqual(testEmail);
    });
})

describe("displaySchool", () => {
    it("getSchool returns engineers intern's school", () => {
        const testSchool = "abc-xyz";
        const testEmp = new Intern("bob", 890, "email@test", testSchool)
        expect(testEmp.getSchool()).toEqual(testSchool);
  });
  });

//   constructor(name, id, email, school) {
