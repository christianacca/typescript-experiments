import { Order } from './semi-strict';

describe('semi-strict class examples', () => {

    describe('on construction', () => {
        let order: Order;
        beforeAll(() => {
            order = new Order();
        });

        it('mandatory properties not assigned to a default value will left undefined', () => {
            // note: this very unexpected as `placedOn` is defined as not allowing undefined/null!
            // therefore a convention should be adopted:
            // if a property is declared as mandatory (ie not undefined), then it MUST always
            // be initialized to a value during construction
            expect(order.placedOn).not.toBeDefined();
        });

        it('mandatory properties can be assigned by field default', () => {
            expect(order.customerName).toBe('Christian');
        });

        it('mandatory properties can be assigned in constructor', () => {
            expect(order.notes).toBe('');
        });
    });

    describe('on property assignment', () => {
        let order: Order;
        beforeEach(() => {
            order = new Order();
        });

        it('should fail compile when assigning null and undefined to mandatory property', () => {
            // all the following will result in compile errors...
            /*
            order.placedOn = null;
            order.placedOn = undefined;

            order.customerName = null;
            order.customerName = undefined;
            
            let nullableName: string | null = null;
            order.customerName = nullableName;

            let maybeName: string | undefined = undefined;
            order.customerName = maybeName;
            */
        });

        it('should accept value when assigning to mandatory property', () => {
            order.customerName += ' Crowhurst';
            const dt = new Date();
            order.placedOn = dt;

            expect(order.customerName).toBe('Christian Crowhurst');
            expect(order.placedOn).toBe(dt);
        });

        it('semi-strict can still throw at runtime without compile error', () => {
            expect(() => order.placedOn.getFullYear()).toThrow();
        });
    })
})


