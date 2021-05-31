import { Dish } from "./dish";

export class Order{
    orderList: Dish[];

    public constructor(orderList: Dish[]){
        this.orderList = orderList;
    }
    
}