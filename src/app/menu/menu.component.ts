import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dish } from '../Models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //receive menu from app component
  @Input() menu1? : Dish[];
  //receive menu from app component
  @Input() toggleState : boolean = false;
  //send ordered dish to app component
  @Output() orderedDish = new EventEmitter<Dish>();
  //send the dish which have to be remove
  @Output() removeDish = new EventEmitter<Dish>();
  //send the dish which have to be updated
  @Output() updateDish = new EventEmitter<any>();
  //add a new dish to the menu
  @Output() addDish = new EventEmitter<Dish>();
  //send the dish which have to be remove
  @Output() deleteDish = new EventEmitter<Dish>();

  constructor() { }


  order(plat:Dish,event:MouseEvent) {
    //if shift key is pressed
    if(event.shiftKey){
      this.removeDish.emit(plat);
    }else{
      this.orderedDish.emit(plat);
    }
    
  }
  onSubmit(form:NgForm,dish:Dish,event:MouseEvent) {
    console.log(event);
    //if shift key is pressed
    if(event.shiftKey){
      console.log("del");
      this.deleteDish.emit(dish);
    }else{
      console.log("up")
      this.updateDish.emit({targetDish:dish,newDishName:form.value.name,newDishPrice:form.value.price});
    }
    
  }
  addNewDish(form:NgForm){
    console.log(form.value);
    let newDish: Dish = {
      name:form.value.name,
      price:form.value.price,
      type:form.value.type
    }
    this.addDish.emit(newDish);

  }

}
