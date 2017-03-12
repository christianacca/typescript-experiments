import { Selectable } from './selectable';

interface PersonDataDefault {
    age: number;
}
interface PersonDataNoDefault {
    firstName: string;
    lastName: string;
}

export type PersonData = Partial<PersonDataDefault> & PersonDataNoDefault;

export class Person implements PersonDataDefault, PersonDataNoDefault {
    age: number;
    firstName: string;
    lastName: string;
    constructor(data: PersonData) {
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