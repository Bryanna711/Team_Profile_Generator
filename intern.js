class Intern{
constructor (internName, internID, internEmail, school) {
    this.internName = internName;
    this.internID = internID;
    this.internEmail = internEmail;
    this.school= school;
}
getInternName() {
    return this.internName;
}

getInternID() {
    return this.internID;
}

getInternEmail() {
    return this.internEmail;
}

getSchool() {
    return this.school;
}

getPosition() {
    return "Intern";
}
}

module.exports = Intern