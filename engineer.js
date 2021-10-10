class Engineer{
    constructor (engName, engID, engEmail, gitHub) {
    this.engName = engName;
    this.engID = engID;
    this.engEmail = engEmail;
    this.gitHub = gitHub;
}
getEngName() {
    return this.engName;
}

getEngID() {
    return this.engID;
}

getEngEmail() {
    return this.engEmail;
}

getGitHub() {
    return this.gitHub;
}

getPosition() {
    return "Engineer";
}
}

module.exports = Engineer