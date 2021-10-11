class Manager{
    constructor (managerName, managerID, managerEmail, managerOffice) {
    this.managerName = managerName;
    this.managerID = managerID;
    this.managerEmail = managerEmail;
    this.managerOffice = managerOffice;
}
getManagerName() {
    return this.managerName;
}

getManagerID() {
    return this.managerID;
}

getManagerEmail() {
    return this.managerEmail;
}

getManagerOffice() {
    return this.managerOffice;
}
getPosition() {
    return "Manager";
}
}

module.exports = Manager