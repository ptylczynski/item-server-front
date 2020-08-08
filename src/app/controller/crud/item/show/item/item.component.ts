import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FoodItem} from '../../../../../common/api/model/foodItem/food-item';
import {FoodItemService} from '../../../../../common/api/access-service/foodItem/food-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  private id: number;
  public item: FoodItem;

  constructor(
    private foodItemService: FoodItemService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.foodItemService.getItem(this.id).subscribe(
      data => this.item = {...data}
    );
  }

}
