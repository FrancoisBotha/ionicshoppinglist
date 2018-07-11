import { Ingredient } from "../models/ingredient";

export class ShoppingListService {
   private ingredients: Ingredient[] = [];

   addItem(name: string, amount: number) {
      this.ingredients.push(new Ingredient(name, amount));
      console.dir(this.ingredients);
   }

   addItems(items: Ingredient[]) {
      this.ingredients.push(...items); //deconstructs array and push individually
   }

   getItems() {
      return this.ingredients.slice(); //creates copy of array
   }

   removeItem(index: number) {
      this.ingredients.splice(index, 1);
   }
}