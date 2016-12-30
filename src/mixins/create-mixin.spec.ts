import { Class3, MixinClass1, MixinClass2, MultiClass } from './examples/simple-multi-class';
import { Person, Selectable, SelectablePerson } from './examples/selectable-person';

/*
** Points of interest:
** 1. `createMixin` dynamically create a class at runtime
** 2. the dynamic class is being merged with an interface that combines all classes in the final mixin. This is a convenience for consumer code
** 3. `MultiClass` combines the implementation from three classes
** 4. `MultiClass` shows that the *default* constructor signature for the dynamic class created might not appropriate
** 5. `SelectablePerson` combines the implementation from 2 classes
** 6. `SelectablePerson` shows a pattern for how to combines multiple constructors that receive parameters
** 7. `Person.print` is accessing members of it's mixin class `Selectable`
*/

describe('mixins', () => {

    it('MultiClass example', () => {
        let obj: MultiClass;
        obj = new MultiClass('ignored argument');

        expect(obj instanceof Class3).toBe(true);
        expect(obj instanceof MultiClass).toBe(true);
        expect(obj instanceof MixinClass1).toBe(false);
        expect(obj instanceof MixinClass2).toBe(false);
        expect(MultiClass.prototype.constructor).toBe(MultiClass);
        expect(obj.property1).toEqual('MixinClass1');
        expect(obj.property2).toEqual('MixinClass2');
        expect(obj.property3).toEqual('Class3');
        expect(obj.method1()).toEqual('MixinClass1');
        expect(obj.method2()).toEqual('MixinClass2');
        expect(obj.method3()).toEqual('Class3');
        expect(obj.method()).toEqual('Class3');
    });

    it('SelectablePerson example', () => {
        let sp: SelectablePerson;
        let p: Person;
        sp = new SelectablePerson({ firstName: 'christian', lastName: 'crowhurst', isSelected: true });
        p = sp;

        expect(sp.isSelected).toBe(true);
        expect(sp instanceof Person).toBe(true);
        expect(sp instanceof Selectable).toBe(false);
        expect(SelectablePerson.prototype.constructor).toBe(SelectablePerson);
        expect(sp.getName()).toBe('christian crowhurst');
        expect(sp.print()).toBe(`${sp.getName()} [selected=${sp.isSelected}]`);
        sp.toggleSelection();
        expect(sp.isSelected).toBe(false);
        // compile error!
        // console.log(`p.print() = ${p.print()}`);
    });
});