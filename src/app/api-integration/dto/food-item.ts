import {Bundle} from './bundle';
import {FoodType} from './food-type';

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  dateAdded: Date;
  bundle: Bundle;
  type: FoodType;
  dueDate: Date;
}
