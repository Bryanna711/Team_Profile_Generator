const Manager = require("../Class-JS/Manager");

test("Can set Office", ()=>{
    const officeNumber = 123;
    const manager = new Manager("Bryanna", 759, "bevinge711@gmail.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
})

test("Can get Office",()=>{
    const officeNumber = 123;
    const manager = new Manager("Bryanna", 759, "bevinge711@gmail.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})