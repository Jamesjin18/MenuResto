import { Dish } from "./dish";

export class Restaurant{
    name: string;
    menu: Dish[];

    public constructor(name:string,menu: Dish[]){
        this.menu = menu;
        this.name = name;
    }
}