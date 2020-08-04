import {Address} from '../address/address';
import {FoodType} from '../foodType/food-type';

export class Item {

  private _name: string;
  private _description: string;
  private _dateAdded: Date;
  private _address: Address;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }

  set dateAdded(value: Date) {
    this._dateAdded = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }
}
