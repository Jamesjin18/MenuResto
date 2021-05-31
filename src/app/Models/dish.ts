export class Dish{
    name: string;
    type: string;
    price: number;
    pdj?: boolean;
    
    public constructor(name: string,type:string,price:number){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}