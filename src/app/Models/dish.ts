export class Dish{
    name?: string;
    type?: string;
    public constructor(name:string,type: string){
        this.type = type;
        this.name = name;
    }
}