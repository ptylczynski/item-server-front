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
import {Router} from '@angular/router';
import {ItemForm} from '../../../../../common/forms/item/item-form';
import {ToastService} from '../../../../../common/toast/toast.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent extends ItemForm implements OnInit{

  public buttonActive = ['btn', 'btn-primary'];
  public buttonInActive = ['btn', 'btn-danger'];
  public submissions = 0;

  constructor(formBuilder: FormBuilder,
              addressService: AddressService,
              typeService: FoodItemTypeService,
              foodService: FoodItemService,
              toastService: ToastService,
              private router: Router) {
    super(formBuilder,
          addressService,
          typeService,
          foodService,
          toastService);
  }

  ngOnInit(): void {
    this.init();
  }

  onSubmit(): void{
    super.onSubmit();
    this.foodService.post(this.form).subscribe(
      // TODO: add progress notification
      () =>{
        this.router.navigateByUrl('items');
        this.toastService.success('Item added');
      }
    );
  }
}
