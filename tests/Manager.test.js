const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Can create a Manager object with name, id, email, and office number if provided valid arguments', () => {
        const newEmployee = new Manager('Grace', 123, 'grace@grace.com', 1487);
        expect(newEmployee.name).toEqual('Grace');
        expect(newEmployee.id).toEqual(123);
        expect(newEmployee.email).toEqual('grace@grace.com');
        expect(newEmployee.office).toEqual(1487)
    });

    describe('getName', () => {
        it('Can return the name of the Manager', () => {
            const newEmployee = new Manager('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getName()).toEqual('Grace')
        });
    });

    describe('getId', () => {
        it('Can return the id of the Manager', () => {
            const newEmployee = new Manager('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getId()).toEqual(123)
        });
    });

    describe('getEmail', () => {
        it('Can return the email of the Manager', () => {
            const newEmployee = new Manager('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getEmail()).toEqual('grace@grace.com')
        });
    });

    describe('getOfficeNumber', () => {
        it('Can return the office number of the Manager', () => {
            const newEmployee = new Manager('Grace', 123, 'grace@grace.com', 1487);
            expect(newEmployee.getOfficeNumber()).toEqual(1487)
        });
    });

    describe('getRole', () => {
        it('Can return the role of the Manager (which is Manager)', () => {
            const newEmployee = new Manager('Grace', 123, 'grace@grace.com', 1487);
            expect(newEmployee.getRole()).toEqual('Manager')
        });
    });
});