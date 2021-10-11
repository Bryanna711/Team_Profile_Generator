const Engineer = require("../Class-JS/Engineer");

test("Can set GitHub", ()=>{
    const gitHub = "DogMom"
    const engineer = new Engineer("Bryanna", 759, "bevinge711@gmail.com", gitHub);
    expect(engineer.gitHub).toBe(gitHub);
})

test("Can get GitHub",()=>{
    const gitHub = "DogMom"
    const engineer = new Engineer("Bryanna", 759, "bevinge711@gmail.com", gitHub);
    expect(engineer.getGitHub()).toBe(gitHub);
})