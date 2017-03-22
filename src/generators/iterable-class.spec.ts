import { Employee, Employer } from './models';

describe('Custom iterable', () => {
    describe('iterate Employer instance', () => {

        let employer: Employer
        beforeAll(() => {
            employer = new Employer({
                employees: [
                    new Employee({ name: 'CC' }),
                    new Employee({ name: 'AB' })
                ]
            });
        });

        it('`for..of` should iterate through Employee instances', () => {
            const employees: Employee[] = [];
            for (let employee of employer) {
                employees.push(employee);
            }
            expect(employees.length).toBe(2);
        });

        it('`Array.from` should produce array of Employee instances', () => {
            const employees = Array.from(employer);
            expect(employees.length).toBe(2);
            expect(employees[0].age).toBeDefined();
        });

        it(`explicit generator method should filter employee's according to supplied predicate`, () => {
            const managers = employer.findEmployees(e => e.name === 'AB');
            expect(Array.from(managers).length).toBe(1)
        });
    });
});