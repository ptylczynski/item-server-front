import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../../../common/api/model/address/address';
import {FoodType} from '../../../../../common/api/model/foodType/food-type';
import {FormBuilder, Validators} from '@angular/forms';
import {AddressService} from '../../../../../common/api/access-service/address/address.service';
import {FoodItemTypeService} from '../../../../../common/api/access-service/food-item-type/food-item-type.service';
import {FoodItemService} from '../../../../../common/api/access-service/foodItem/food-item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodItem} from '../../../../../common/api/model/foodItem/food-item';
import {catchError, tap} from 'rxjs/operators';
import {ItemForm} from '../../../../../common/forms/item/item-form';
import {ToastrService} from 'ngx-toastr';
import {ToastService} from '../../../../../common/toast/toast.service';

@Component({
  selector: 'app-modify',
  templateUrl: './item-modify.component.html',
  styleUrls: ['./item-modify.component.css']
})
export class ItemModifyComponent extends ItemForm implements OnInit {

  public food: FoodItem;
  public buttonActive = ['btn', 'btn-primary'];
  public buttonInActive = ['btn', 'btn-danger'];
  public submissions = 0;

  constructor(formBuilder: FormBuilder,
              addressService: AddressService,
              typeService: FoodItemTypeService,
              foodService: FoodItemService,
              toastService: ToastService,
              private router: Router,
              private route: ActivatedRoute) {
    super(formBuilder,
      addressService,
      typeService,
      foodService,
      toastService);
  }

  onSubmit(): void{
    this.foodService.put(this.form).subscribe(
      () => {
        this.router.navigateByUrl('items');
      }
    );
  }

  ngOnInit(): void {
    super.init();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.getItem(id).subscribe(
        data => {
          this.food = {...data};
          this.form.get('id').setValue(this.food.id);
          this.form.get('name').setValue(this.food.name);
          this.form.get('description').setValue(this.food.description);
          this.form.get('due').setValue(this.food.dueDate);
          this.form.get('type').setValue(this.food.type.id);
          this.form.get('address').setValue(this.food.addressDAO.id);
          console.log(this.food);
        }
    );
  }
}
