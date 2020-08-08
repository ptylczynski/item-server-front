import { Component, OnInit } from '@angular/core';
import {FoodItem} from '../../common/api/model/foodItem/food-item';
import {FoodItemService} from '../../common/api/access-service/foodItem/food-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public item: FoodItem;

  constructor(
    private foodItemService: FoodItemService
  ) { }

  ngOnInit(): void {
    this.foodItemService.getItem(2).subscribe(
      data => this.item = {...data}
    );
  }

}
