import { Order, OrderData } from './strict-destructuring';

describe('strict destructuring class examples', () => {

    describe('on construction', () => {
        let order: Order;
        beforeAll(() => {
            order = new Order({ customerName: 'Christian' });
            // all the following will result in compile errors...
            /*
            order = new Order();
            order = new Order({});
            order = new Order({ customerName: null });
            order = new Order({ customerName: undefined });
            const name: string | null = null;
            order = new Order({ customerName: name });
            */
        });

        it('should receive values for all mandatory properties that cannot be defaulted', () => {
            expect(order.customerName).toBe('Christian');
        });

        it('should default in mandatory properties with defaults when no value supplied', () => {
            expect(order.placedOn).toBeDefined();
        });

        it('undefined value for mandatory property should trigger default value', () => {
            const o = new Order({ customerName: '-', placedOn: undefined });
            expect(o.placedOn).toBeDefined()
        });

        it('should use value supplied for mandatory properties with defaults', () => {
            const dt = new Date(2016, 5, 10);
            const o = new Order({ customerName: '-', placedOn: dt });
            expect(o.placedOn).toBe(dt);
        });

        it('should leave optional properties undefined when not supplied', () => {
            expect(order.address).not.toBeDefined();
        });

        it('should accept values for optional properties', () => {
            const o = new Order({ customerName: '-', address: '11 London Road' });
            expect(o.address).toBe('11 London Road');
        });
        
        it('should not accept null value for properties that do not explicitly allow null', () => {
            // all the following will result in compile errors...
            // const o = new Order({ customerName: '-', address: null });
            // const o = new Order({ customerName: '-', placedOn: null });
            // const o = new Order({ customerName: null });
        });
        
        it('should be able to define data only properties as an object literal', () => {
            const data: OrderData = {
                placedOn: undefined,
                customerName: 'Christian'
            }
            const o = new Order(data);

            // this will not compile
            // const data2: OrderData = {
            //     placedOn: undefined
            // }
        });
    });

    describe('on property assignment', () => {
        let order: Order;
        beforeAll(() => {
            order = new Order({ customerName: 'Christian' });
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
    })
})


