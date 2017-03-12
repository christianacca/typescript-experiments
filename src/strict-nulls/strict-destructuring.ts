export type OrderDataNoDefault = Partial<Pick<Order,
    'address'
    >>
    & Pick<Order,
    'customerName'
    >

export type OrderDataDefault = Partial<Pick<Order,
    'notes' |
    'placedOn'
    >>

export type OrderData = OrderDataDefault & OrderDataNoDefault;

const standardDeliveryDays = 2;

export class Order {
    address?: string;
    customerName: string;
    notes: string;
    placedOn: Date;
    constructor({ address, customerName, notes = '', placedOn = new Date() }: OrderData) {
        Object.assign(this, { address, customerName, notes, placedOn });
    }
    getExpectedDelivery(): Date {
        const result = new Date(this.placedOn);
        result.setDate(result.getDate() + standardDeliveryDays);
        return result;
    }
}