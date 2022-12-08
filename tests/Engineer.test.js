const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Can create an Engineer object with name, id, email, and github if provided valid arguments', () => {
        const newEmployee = new Engineer('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
        expect(newEmployee.name).toEqual('Grace');
        expect(newEmployee.id).toEqual(123);
        expect(newEmployee.email).toEqual('grace@grace.com');
        expect(newEmployee.github).toEqual('github.com/gyao1487')
    });

    describe('getName', () => {
        it('Can return the name of the Engineer', () => {
            const newEmployee = new Engineer('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getName()).toEqual('Grace')
        });
    });

    describe('getId', () => {
        it('Can return the id of the Engineer', () => {
            const newEmployee = new Engineer('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getId()).toEqual(123)
        });
    });

    describe('getEmail', () => {
        it('Can return the email of the Engineer', () => {
            const newEmployee = new Engineer('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getEmail()).toEqual('grace@grace.com')
        });
    });

    describe('getGithub', () => {
        it('Can return the Github of the Engineer', () => {
            const newEmployee = new Engineer('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getGithub()).toEqual('github.com/gyao1487')
        });
    });

    describe('getRole', () => {
        it('Can return the role of the Engineer (which is Engineer)', () => {
            const newEmployee = new Engineer('Grace', 123, 'grace@grace.com', 'github.com/gyao1487');
            expect(newEmployee.getRole()).toEqual('Engineer')
        });
    });
});