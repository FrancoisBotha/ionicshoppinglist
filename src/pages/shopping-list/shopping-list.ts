import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor (private slService: ShoppingListService) {}

  //Does not cache - always loads when page enters
  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    console.log(form);
    this.slService.addItem(form.value.ingredientName,
                            form.value.amount);
    form.reset(); //empty form and reset validation state
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.slService.getItems();
  }

  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }

}
