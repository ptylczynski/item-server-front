import {Address} from '../address/address';
import {FoodType} from '../foodType/food-type';

export interface Item {

  id: number;
  name: string;
  description: string;
  dateAdded: Date;
  addressDAO: Address;
}
