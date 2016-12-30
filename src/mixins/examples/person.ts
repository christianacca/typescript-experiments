import { Selectable } from './selectable';

interface PersonDataWithDefault {
    age: number;
}
interface PersonDataNoDefault {
    firstName: string;
    lastName: string;
}

export type PersonCtorData = Partial<PersonDataWithDefault> & PersonDataNoDefault;

export class Person implements PersonDataWithDefault, PersonDataNoDefault {
    age: number;
    firstName: string;
    lastName: string;
    constructor(data: PersonCtorData) {
        Object.assign(this, data);
        // assign missing defaults
        this.age = data.age == null ? 0: data.age;
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    print(this: Person & Selectable) {
        return `${this.getName()} [selected=${this.isSelected}]`;
    }
}