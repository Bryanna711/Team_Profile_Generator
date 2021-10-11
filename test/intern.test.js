const Intern = require("../Class JS/intern");

const newIntern = new Intern("Bryanna", 777, "bevinge711@gmail.com", "Georgia Tech", "Intern")

describe("Intern", () => {
    describe("getInternName", () => {
        it("should return a string", () => {
            const internName = "Bryanna";
            const result = newIntern.getInternName(internName);
            expect(result).toBe(internName)
        })
    });

    describe("getInternID", () => {
        it("should return an Integer", () => {
            const internID = 777;
            const result = newIntern.getInternID(internID);
            expect(result).toBe(internID)
        })
    });

    describe("getInternEmail", () => {
        it("should return a string", () => {
            const internEmail = "bevinge711@gmail.com";
            const result = newIntern.getInternEmail(internEmail);
            expect(result).toBe(internEmail)
        })
    });

    describe("getSchool", () => {
        it("should return a string", () => {
            const school = "Georgia Tech";
            const result = newIntern.getSchool(school);
            expect(result).toBe(school)
        })
    });

    describe("getPosition", () => {
        it("should return a string", () => {
            const position = "Intern";
            const result = newIntern.getPosition(position);
            expect(result).toEqual("Intern")
        })
    });

})