import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor (private slService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    console.log(form);
    this.slService.addItem(form.value.ingredientName,
                            form.value.amount);
    form.reset(); //empty form and reset validation state
  }

}
