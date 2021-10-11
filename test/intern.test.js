const Intern = require("../Class-JS/Intern");

test("Can set School", ()=>{
    const school = "Pupford"
    const intern = new Intern("Bryanna", 759, "bevinge711@gmail.com", school);
    expect(intern.school).toBe(school);
})

test("Can get School",()=>{
    const school = "Pupford"
    const intern = new Intern("Bryanna", 759, "bevinge711@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
})