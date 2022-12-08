const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('Can create an Employee object with name, id, email if provided valid arguments', () => {
        const newEmployee = new Employee('Grace', 123, 'grace@grace.com');
        expect(newEmployee.name).toEqual('Grace');
        expect(newEmployee.id).toEqual(123);
        expect(newEmployee.email).toEqual('grace@grace.com');
    });

    describe('getName', () => {
        it('Can return the name of the Employee', () => {
            const newEmployee = new Employee('Grace', 123, 'grace@grace.com');
            expect(newEmployee.getName()).toEqual('Grace')
        });
    });

    describe('getId', () => {
        it('Can return the id of the Employee', () => {
            const newEmployee = new Employee('Grace', 123, 'grace@grace.com');
            expect(newEmployee.getId()).toEqual(123)
        });
    });

    describe('getEmail', () => {
        it('Can return the email of the Employee', () => {
            const newEmployee = new Employee('Grace', 123, 'grace@grace.com');
            expect(newEmployee.getEmail()).toEqual('grace@grace.com')
        });
    });

    describe('getRole', () => {
        it('Can return the role of the Employee (which is Employee)', () => {
            const newEmployee = new Employee('Grace', 123, 'grace@grace.com');
            expect(newEmployee.getRole()).toEqual('Employee')
        });
    });
});

