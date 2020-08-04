import {Item} from '../item/item';
import {FoodType} from '../foodType/food-type';

export class FoodItem extends Item{
  private _dueDate: Date;
  private _type: FoodType;

  get dueDate(): Date {
    return this._dueDate;
  }

  set dueDate(value: Date) {
    this._dueDate = value;
  }

  get type(): FoodType {
    return this._type;
  }

  set type(value: FoodType) {
    this._type = value;
  }
}
