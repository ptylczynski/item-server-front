import {Item} from '../item/item';
import {FoodType} from '../foodType/food-type';

export interface FoodItem extends Item{
  dueDate: Date;
  type: FoodType;
}
