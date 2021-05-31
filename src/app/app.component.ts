import { Component, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Dish } from './Models/dish';
import { Order } from './Models/order';
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
  orderList:Order[] = [];

  //bind toggleState to button from switch component 
  onCheck(check: boolean) {
    this.toggleState = check;
  }
  //add an order to order component
  addOrder(dish: Dish) {
    console.log(dish);
    let isAdded = true;
    this.orderList.forEach((element,index)=>{
      if(element.order == dish){
        this.orderList[index].quantity ++;
        isAdded = false;
      }
    });
    if(isAdded){
      this.orderList.push(new Order(dish,1));
    }
  }
  //remove order from order component
  removeOrder(order: Dish) {
    let orders = this.orderList.slice();
    this.orderList.forEach((element,index)=>{
      if(element.order == order){
        this.orderList[index].quantity --;
        if(this.orderList[index].quantity<=0){
          this.orderList.splice(index,1);
        }
      }
    });
  }
  //remove order from order component
  updateDish(order: Dish) {
    let orders = this.orderList.slice();
    this.orderList.forEach((element,index)=>{
      if(element.order == order){
        this.orderList[index].quantity --;
        if(this.orderList[index].quantity<=0){
          this.orderList.splice(index,1);
        }
      }
    });
  }
}
