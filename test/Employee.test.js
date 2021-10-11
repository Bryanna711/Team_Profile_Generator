
const Employee = require("../Class-JS/Employee.js")

test("Can make an object", ()=>{
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
}) 

test("Can set name", ()=>{
    const name = "Bryanna";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("Can set ID", ()=>{
    const id = 759;
    const employee = new Employee("Bryanna",id);
    expect(employee.id).toBe(id);
})

test("Can set Email", ()=>{
    const email = "bevinge711@gmail.com";
    const employee = new Employee("Bryanna", 759, email);
    expect(employee.email).toBe(email);
})

test("Can get name", ()=>{
    const name = "Bryanna";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name)

})

test("Can get ID", ()=>{
    const id = 759;
    const employee = new Employee("Bryanna",id);
    expect(employee.getId()).toBe(id);
})

test("Can get Email", ()=>{
    const email = "bevinge711@gmail.com";
    const employee = new Employee("Bryanna", 759, email);
    expect(employee.getEmail()).toBe(email)
})
