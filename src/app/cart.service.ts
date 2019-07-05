import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'}
)
export class CartService {
  items = []
  constructor() { }

  addItems(item){
    this.items.push(item)
  }

  getitems(){
    return this.items;
  }
  clearItems(){
    this.items= []
    return this.items
  }

}