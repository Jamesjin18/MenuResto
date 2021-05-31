import { Component, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Dish } from './Models/dish';
import { Restaurant } from './Models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //login state
  toggleState: boolean = false;
  menu1 = [
    {name:"salade",type:"entree",price:5},
    {name:"burrata & tomate",type:"entree",price:5},
    {name:"oeuf mayonnaise",type:"entree",price:3},
    {name:"entrecote",type:"plat",price:12},
    {name:"brochette de boeuf",type:"plat",price:11},
    {name:"burger Hippo",type:"plat",price:12,pdj:true},
    {name:"viennois fruits rouge",type:"dessert",price:3},
    {name:"mousse au chocolat",type:"dessert",price:3},
    {name:"gateau",type:"dessert",price:4}
  ];
  resto1 = new Restaurant("Hippopotamus",this.menu1);
  orderList:Dish[] = [];

  //bind toggleState to button from switch component 
  onCheck(check: boolean) {
    this.toggleState = check;
  }
  //add an order to order component
  addOrder(dish: Dish) {
    if(this.toggleState){
      this.orderList.push(dish);
    }else{
      console.log("Your are not connected");
    }
  }
  //remove order from order component
  removeOrder(order: Dish) {
    //create a shadow copy
    let orders = this.orderList.slice();
    this.orderList.forEach((dish,index)=>{
      if(order==dish) {
        orders.splice(orders.indexOf(dish),1)
      };
    });
    this.orderList = orders;
  }
}
