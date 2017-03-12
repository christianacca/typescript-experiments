/**
 * This class has a problem - `placedOn` will be left undefined;
 * strict null checks will not fail the compile in any way
 * resulting in runtime error when referencing an unassigned `placedOn`
 */
export class Order {
    address?: string;
    customerName = 'Christian';
    notes: string;
    placedOn: Date;
    constructor() {
        this.notes = '';
    }
}