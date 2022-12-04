const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, number) {
        super(name,id,email);
        this.github = github;
        this.number = number
        this.role = 'Manager';
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Manager';
    }
}