import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FoodItem} from '../../../../../common/api/model/foodItem/food-item';
import {FoodItemService} from '../../../../../common/api/access-service/foodItem/food-item.service';

@Component({
  selector: 'app-item-galery',
  templateUrl: './item-galery.component.html',
  styleUrls: ['./item-galery.component.css']
})
export class ItemGaleryComponent implements OnInit {

  public ids: number[];

  constructor(private foodItemService: FoodItemService) { }

  ngOnInit(): void {
    this.foodItemService.getIds().subscribe(
      data => this.ids = data._embedded.longList
    );
  }

  itemDelete(id: number): void{
    this.ids = this.ids.filter(el => el !== id);
  }

}
