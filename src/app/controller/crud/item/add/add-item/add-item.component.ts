import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Address} from '../../../../../common/api/model/address/address';
import {FoodType} from '../../../../../common/api/model/foodType/food-type';
import {AddressService} from '../../../../../common/api/access-service/address/address.service';
import {add} from 'ngx-bootstrap/chronos';
import {FoodItemTypeService} from '../../../../../common/api/access-service/food-item-type/food-item-type.service';
import {FoodItem} from '../../../../../common/api/model/foodItem/food-item';
import {FoodItemService} from '../../../../../common/api/access-service/foodItem/food-item.service';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public buttonActive = ['btn', 'btn-primary'];
  public buttonInActive = ['btn', 'btn-danger'];
  public submissions = 0;
  public now = Date.now();
  public addresses: Address[];
  public types: FoodType[];
  public form =  this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', Validators.required],
    address: ['', Validators.required],
    type: ['', Validators.required],
    due: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
              private addressService: AddressService,
              private typeService: FoodItemTypeService,
              private foodService: FoodItemService) { }

  onSubmit(): void{
    this.foodService.post(this.form).subscribe();
  }

  ngOnInit(): void {
    this.addressService.getAll().subscribe(
      data => this.addresses = data._embedded.addressDAOList
    );

    this.typeService.getAll().subscribe(
      data => this.types = data._embedded.foodTypeDAOList
    );
  }

  getAddressAsString(address: Address): string{
    if (address.home != null){ return address.street + ' ' + address.building + '/' + address.home + ', ' + address.city + ', ' + address.country}
    return address.street + ' ' + address.building + ', ' + address.city + ', ' + address.country;
  }

  getTypeAsString(type: FoodType): string{
    return type.name + ' - ' + type.description;
  }
}
