import {FoodItem} from '../../api/model/foodItem/food-item';
import {Address} from '../../api/model/address/address';
import {FoodType} from '../../api/model/foodType/food-type';
import {FormBuilder, Validators} from '@angular/forms';
import {AddressService} from '../../api/access-service/address/address.service';
import {FoodItemTypeService} from '../../api/access-service/food-item-type/food-item-type.service';
import {FoodItemService} from '../../api/access-service/foodItem/food-item.service';
import {OnInit} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {ToastService} from '../../toast/toast.service';

export class ItemForm{
  public now = Date.now();
  public addresses: Address[];
  public types: FoodType[];
  public form =  this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required]],
    description: ['', Validators.required],
    address: ['', Validators.required],
    type: ['', Validators.required],
    due: ['', Validators.required],
  });

  constructor(protected formBuilder: FormBuilder,
              private addressService: AddressService,
              private typeService: FoodItemTypeService,
              protected foodService: FoodItemService,
              protected toastService: ToastService) { }

  onSubmit(): void {}

  init(): void {
    this.addressService.getAll().pipe(
      tap(
        data => this.addresses = data._embedded.addressDAOList
      ),
      catchError(
        ((err, caught) => this.toastService.resolve(err, caught))
      )
    ).subscribe();

    this.typeService.getAll().subscribe(
      data => this.types = data._embedded.foodTypeDAOList
    );
  }

  getAddressAsString(address: Address): string{
    if (address.home != null){ return address.street + ' ' + address.building + '/' + address.home + ', ' + address.city + ', ' + address.country; }
    return address.street + ' ' + address.building + ', ' + address.city + ', ' + address.country;
  }

  getTypeAsString(type: FoodType): string{
    return type.name + ' - ' + type.description;
  }
}
