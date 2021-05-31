import { Component, Input, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { Dish } from '../Models/dish';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {

  //our order 
  _orderList:Dish[] = [];
  //table of data
  dataSource: MatTableDataSource <Dish> ;
  //columns of our table
  displayedColumns: string[] = ['type', 'name','price'];

  //implement table to be able to refresh table data
  @ViewChild(MatTable) table: MatTable<Dish> | undefined;
  
  constructor() { 
    this.dataSource = new MatTableDataSource<Dish>();
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
  //getter and setter of orederList
  @Input()
  get orderList(): Dish[] { return this._orderList; }
  set orderList(orders:Dish[]){
    this._orderList = orders;
    this.update();
  }

}
