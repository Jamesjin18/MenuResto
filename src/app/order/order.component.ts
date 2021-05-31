import { Component, Input, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { Dish } from '../Models/dish';
import { Order } from '../Models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {

  //our order 
  _orderList:Order[] = [];
  //table of data
  dataSource: MatTableDataSource <Order> ;
  //columns of our table
  displayedColumns: string[] = ['type', 'name','quantity','price' ];
  totalCost = 0;
  //implement table to be able to refresh table data
  @ViewChild(MatTable) table: MatTable<Order> | undefined;
  
  constructor() { 
    this.dataSource = new MatTableDataSource<Order>();
  }
  //call when a change occure
  ngDoCheck(){
    this.update();
  }
  //update data
  update(){
    this.dataSource.data = this._orderList;
    this.table?.renderRows();
  }
  getTotalCost() {
    let total=0;
    this.orderList.forEach((order)=>{
      total = total + (order.order.price * order.quantity);
    });
    return total;
  }
  //getter and setter of orederList
  @Input()
  get orderList(): Order[] { return this._orderList; }
  set orderList(orders:Order[]){
    this._orderList = orders;
    this.update();
  }

}
