import { Dish } from "./dish";

export class Order{
    order: Dish;
    quantity: number;

    public constructor(order: Dish,quantity:number){
        this.order = order;
        this.quantity = quantity;
    }
    
}