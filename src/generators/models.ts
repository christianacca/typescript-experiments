import * as _ from 'lodash';

import filter from './combinators/filter';

export class Employer implements Iterable<Employee> {
    employees: Employee[] = [];
    constructor({ employees }: Partial<Employer> = {}) {
        this.employees = employees || [];
    }
    [Symbol.iterator](): Iterator<Employee> {
        return this.employees[Symbol.iterator]();
    }
    * findEmployees(predicate: (employee: Employee) => boolean): Iterable<Employee> {
        yield* filter(this.employees, predicate);
    }
}

export class Employee {
    age = Math.floor(Math.random() * 100);
    name: string;
    constructor({ age, name }: Partial<Employee> = {}) {
        Object.assign(this, _.defaults({ age, name }, this));
    }
}