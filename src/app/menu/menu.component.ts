import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  //send the dish which have to be remove
  @Output() updateDish = new EventEmitter<Dish>();
  
  constructor() { }


  order(plat:Dish,event:MouseEvent) {
    //if shift key is pressed
    if(event.shiftKey){
      this.removeDish.emit(plat);
    }else{
      this.orderedDish.emit(plat);
    }
    
  }
  onSubmit() {
    
  }
  update(dish:Dish) {
    this.updateDish.emit(dish);
  }

}
