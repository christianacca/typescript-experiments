import { defaults } from 'lodash';

export class OrderDataDefault {
    placedOn = new Date();
    notes = '';
}
export type OrderDataNoDefault = Partial<Pick<Order,
    'address'
    >>
    & Pick<Order,
    'customerName'
    >

export type OrderData = Partial<OrderDataDefault> & OrderDataNoDefault;

const standardDeliveryDays = 2;

export class Order implements OrderDataDefault{
    address?: string;
    customerName: string;
    notes: string;
    placedOn: Date;
    constructor(data: OrderData) {
        Object.assign(this, data);
        defaults(this, new OrderDataDefault());
    }
    getExpectedDelivery(): Date {
        const result = new Date(this.placedOn);
        result.setDate(result.getDate() + standardDeliveryDays);
        return result;
    }
}