import { createMixin } from '../create-mixin';
import { Person, PersonCtorData } from './person';
import { Selectable, SelectableCtorData } from './selectable';

interface SelectablePersonCtor {
    new(data: PersonCtorData & SelectableCtorData): SelectablePerson
}

let SelectablePerson = createMixin<Person, Selectable, SelectablePersonCtor>(Person, Selectable);
interface SelectablePerson extends Person, Selectable {}

export { SelectablePerson, Selectable, Person };