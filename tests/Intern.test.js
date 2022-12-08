const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Can create an Intern object with name, id, email, and school if provided valid arguments', () => {
        const newEmployee = new Intern('Grace', 123, 'grace@grace.com', 'Northwestern');
        expect(newEmployee.name).toEqual('Grace');
        expect(newEmployee.id).toEqual(123);
        expect(newEmployee.email).toEqual('grace@grace.com');
        expect(newEmployee.school).toEqual('Northwestern')
    });

    describe('getName', () => {
        it('Can return the name of the Intern', () => {
            const newEmployee = new Intern('Grace', 123, 'grace@grace.com', 'Northwestern');
            expect(newEmployee.getName()).toEqual('Grace')
        });
    });

    describe('getId', () => {
        it('Can return the id of the Intern', () => {
            const newEmployee = new Intern('Grace', 123, 'grace@grace.com', 'Northwestern');
            expect(newEmployee.getId()).toEqual(123)
        });
    });

    describe('getEmail', () => {
        it('Can return the email of the Intern', () => {
            const newEmployee = new Intern('Grace', 123, 'grace@grace.com', 'Northwestern');
            expect(newEmployee.getEmail()).toEqual('grace@grace.com')
        });
    });

    describe('getSchool', () => {
        it('Can return the school name of the Intern', () => {
            const newEmployee = new Intern('Grace', 123, 'grace@grace.com', 'Northwestern');
            expect(newEmployee.getSchool()).toEqual('Northwestern')
        });
    });

    describe('getRole', () => {
        it('Can return the role of the Intern (which is Intern)', () => {
            const newEmployee = new Intern('Grace', 123, 'grace@grace.com', 1487);
            expect(newEmployee.getRole()).toEqual('Intern')
        });
    });
});