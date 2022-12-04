const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school,) {
        super(name,id,email);
        this.github = github;
        this.school = school
        this.role = 'Manager';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}