const { it } = require("@jest/globals");
const Employee = require("../lib/employee");


describe("displayIDMethod", () => {
  it("Employee ID is displayed", () => {
      const testID = "890";
      const testEmp = new Employee("Bob", testID, "email@test")
    expect(testEmp.getId()).toBe(testID);
    // we expect test id to be 890 and we have a constant of 890 so that keeps the value that we are testing for 
    // what we are testing is the insertion of data and the retrieval of data
    });
});

// designed to fail:
// describe("displayID", () => {
//     it("Employee ID is displayed", () => {
//         const testID = "890";
//         const testEmp = new Employee("Bob", testID, "email@test")
//       expect(testEmp.id).toBe(1000);
//     });
//   });

describe("displayRole", () => {
    it(" getRole() should return \"Employee\" ", () => {
        const testRole = "Employee";
        const testEmp = new Employee("Bob", 890, "email@test")
        expect(testEmp.getRole()).toEqual(testRole);
    });
});

describe("displayName", () => {
    it("getName() should return a name", () => {
        const testName = "Bob";
        const testEmp = new Employee(testName, 890, "email@test")
        expect(testEmp.getName()).toEqual(testName);
    });
})

describe("displayEmail", () => {
    it(" getEmail() should return an email ", () => {
        const testEmail = "test@gmail.com";
        const testEmp = new Employee("bob", 890, testEmail)
        expect(testEmp.getEmail()).toEqual(testEmail);
    });
})
